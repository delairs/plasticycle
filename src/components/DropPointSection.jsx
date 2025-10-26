import DropPointMap from './DropPointMap';

export default function DropPointSection() {
  return (
    <section className="p-6 bg-gray-50 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-3">Peta Drop Point</h2>
      <p className="text-gray-600 mb-4">
        Temukan lokasi pengumpulan plastik terdekat di daerahmu.
      </p>
      <DropPointMap />
      <p className="text-xs text-gray-500 mt-2">
        Tip: Gunakan data dari OpenLitterMap atau data.go.id untuk mengisi lokasi drop point.
      </p>
    </section>
  );
}
