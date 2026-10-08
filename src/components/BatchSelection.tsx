import { motion } from 'framer-motion';
import { Clock, Users, CheckCircle } from 'lucide-react';
import { BATCHES, START_DATE, BATCH_SIZE, DURATION } from '../App';
import { useInView } from '../hooks/useInView';

interface BatchSelectionProps {
  selectedBatch: typeof BATCHES[0] | null;
  onBatchSelect: (batch: typeof BATCHES[0]) => void;
}

const BatchCard = ({
  batch,
  isSelected,
  onSelect,
  index,
  inView,
}: {
  batch: typeof BATCHES[0];
  isSelected: boolean;
  onSelect: () => void;
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onSelect}
    className={`cursor-pointer rounded-2xl p-6 transition-all duration-400 relative overflow-hidden group ${
      isSelected
        ? 'batch-selected'
        : 'card hover:border-blue-500/30'
    }`}
    style={isSelected ? {
      background: 'rgba(14,165,233,0.08)',
      borderColor: 'rgba(14,165,233,0.7)',
      boxShadow: '0 0 30px rgba(14,165,233,0.25), 0 0 60px rgba(14,165,233,0.08)',
    } : {}}
  >
    {/* Background glow on hover */}
    {!isSelected && (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />
    )}

    {/* Selected indicator */}
    {isSelected && (
      <div className="absolute top-3 right-3">
        <CheckCircle className="text-amber-400" size={22} />
      </div>
    )}

    {/* Batch number label */}
    <div className={`inline-block text-xs font-black tracking-widest px-3 py-1 rounded-full mb-4 ${
      isSelected
        ? 'bg-amber-500/20 text-amber-300'
        : 'bg-white/5 text-gray-400'
    }`}>
      {batch.label}
    </div>

    {/* Time */}
    <div className="flex items-center gap-3 mb-4">
      <Clock size={20} className={isSelected ? 'text-amber-400' : 'text-gray-500'} />
      <span className={`text-2xl font-black ${isSelected ? 'text-white' : 'text-gray-200'}`}>
        {batch.time}
      </span>
    </div>

    {/* Info pills */}
    <div className="flex flex-wrap gap-2 mb-5">
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
        isSelected ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-gray-400'
      }`}>
        ⏱ {DURATION}
      </span>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
        isSelected ? 'bg-yellow-500/20 text-yellow-300' : 'bg-white/5 text-gray-400'
      }`}>
        <Users size={10} className="inline mr-1" />
        ONLY {BATCH_SIZE} MEMBERS
      </span>
    </div>

    {/* Select Button */}
    <button
      className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
        isSelected
          ? 'bg-amber-500 text-white shadow-lg shadow-blue-500/30'
          : 'bg-white/5 text-gray-300 hover:bg-amber-500/20 hover:text-amber-300'
      }`}
    >
      {isSelected ? '✓ SELECTED' : 'SELECT THIS BATCH'}
    </button>
  </motion.div>
);

const BatchSelection = ({ selectedBatch, onBatchSelect }: BatchSelectionProps) => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="batches" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(14,165,233,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-semibold text-amber-300 mb-4">
            📅 {START_DATE}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            CHOOSE YOUR{' '}
            <span className="gradient-text">BATCH</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Select your preferred 90-minute batch.
          </p>
          {selectedBatch && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-green-300"
              style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
            >
              <CheckCircle size={14} />
              Selected: {selectedBatch.label} — {selectedBatch.time}
            </motion.div>
          )}
        </motion.div>

        {/* Batch Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BATCHES.map((batch, i) => (
            <BatchCard
              key={batch.id}
              batch={batch}
              isSelected={selectedBatch?.id === batch.id}
              onSelect={() => onBatchSelect(batch)}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {!selectedBatch && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center text-gray-500 text-sm mt-6"
          >
            ⬆ Select a batch above. Your selection will be saved automatically.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default BatchSelection;
