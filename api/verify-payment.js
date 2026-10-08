// Vercel Serverless Function — /api/verify-payment
// Verifies a Cashfree payment status using the order ID.
// Used after the checkout modal closes to confirm payment.

export const config = {
  runtime: 'nodejs20.x',
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');

  const { order_id } = req.query;

  if (!order_id) {
    return res.status(400).json({ error: 'order_id is required.' });
  }

  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;
  const environment = process.env.CASHFREE_ENV || 'production';

  if (!appId || !secretKey) {
    return res.status(500).json({ error: 'Payment gateway not configured.' });
  }

  const cashfreeBaseUrl =
    environment === 'production'
      ? 'https://api.cashfree.com'
      : 'https://sandbox.cashfree.com';

  try {
    const response = await fetch(`${cashfreeBaseUrl}/pg/orders/${order_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': appId,
        'x-client-secret': secretKey,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.message || 'Failed to verify payment.',
      });
    }

    return res.status(200).json({
      orderId: data.order_id,
      orderStatus: data.order_status, // PAID | ACTIVE | EXPIRED | CANCELLED
      orderAmount: data.order_amount,
      orderCurrency: data.order_currency,
    });
  } catch (err) {
    console.error('Error verifying Cashfree payment:', err);
    return res.status(500).json({ error: 'Network error while verifying payment.' });
  }
}
