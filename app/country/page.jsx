import Link from 'next/link';

export default function Country() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Explore Countries List</h1>
      
      <ul className="list-disc list-inside space-y-4 text-lg">
        <li><Link href="/country/pakistan" className="text-blue-500 hover:underline">Pakistan</Link></li>
        <li><Link href="/country/canada" className="text-blue-500 hover:underline">Canada</Link></li>
        <li><Link href="/country/germany" className="text-blue-500 hover:underline">Germany</Link></li>
        <li><Link href="/country/japan" className="text-blue-500 hover:underline">Japan</Link></li>
        <li><Link href="/country/brazil" className="text-blue-500 hover:underline">Brazil</Link></li>
        <li><Link href="/country/australia" className="text-blue-500 hover:underline">Australia</Link></li>
      </ul>
    </div>
  );
}
// const countries = {
//     canada: { name: 'Canada', population: 37742154, capital: 'Ottawa' },
//     germany: { name: 'Germany', population: 83783942, capital: 'Berlin' },
//     japan: { name: 'Japan', population: 126476461, capital: 'Tokyo' },
//     brazil: { name: 'Brazil', population: 211000000, capital: 'Brasília' },
//     australia: { name: 'Australia', population: 25499884, capital: 'Canberra' },
//   };
