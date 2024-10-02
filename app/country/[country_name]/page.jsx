export default function CountryDetail({ params }) {
    // Access country_name from params
    const { country_name } = params;
  
    // Log for debugging
    console.log("Country Name from URL:", country_name); 
  
    if (!country_name) {
      return <div>Country not found</div>;
    }
  
    const countries = {
      pakistan: { name: 'Pakistan', population: 12343322, capital: 'Islamabad' },
      canada: { name: 'Canada', population: 37742154, capital: 'Ottawa' },
      germany: { name: 'Germany', population: 83783942, capital: 'Berlin' },
      japan: { name: 'Japan', population: 126476461, capital: 'Tokyo' },
      brazil: { name: 'Brazil', population: 211000000, capital: 'Brasília' },
      australia: { name: 'Australia', population: 25499884, capital: 'Canberra' },
    };
  
    const country = countries[country_name.toLowerCase()]; // Find the country in the object
  
    if (!country) {
      return <div>Country not found</div>;
    }
  
    return (
      <div className="max-w-4xl mx-auto py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Country Details</h1>
        <h1 className="m-4"> Name: {country.name}</h1>
        <h1 className="m-4"> Population: {country.population}</h1>
        <h1 className="m-4"> Capital: {country.capital}</h1>
      </div>
    );
  }






















// const countries = {
//     pakistan:{name:'Pakistan',population:12343322,capital:'Islamabad'},
//     canada: { name: 'Canada', population: 37742154, capital: 'Ottawa' },
//     germany: { name: 'Germany', population: 83783942, capital: 'Berlin' },
//     japan: { name: 'Japan', population: 126476461, capital: 'Tokyo' },
//     brazil: { name: 'Brazil', population: 211000000, capital: 'Brasília' },
//     australia: { name: 'Australia', population: 25499884, capital: 'Canberra' },
//   };

// export default function CountryDetail({params}) {
//     const { country_name } = params;
//     console.log("Country Name:", country_name); // Check if country_name is defined


//     // Log the country_name to make sure it's being passed correctly
//     console.log(country_name); // Check the value in the console

//   if (!country_name) {
//     return <div>Country not found</div>;
//   }

//   const country = countries[country_name.toLowerCase()]; // Find the country in the object

//   // Check if the country is found, otherwise display 'Country not found'
//   if (!country) {
//     return <div>Country not found</div>;
//   }


//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4 text-center">
//       <h1 className="text-4xl font-bold mb-6">Country Details</h1>
//       <h1 className="m-4"> Name: {country.name}</h1>
//         <h1 className="m-4"> Population: {country.population}</h1>
//         <h1 className="m-4"> Capital: {country.capital}</h1>
      
      
   
//     </div>
//   );
// }
