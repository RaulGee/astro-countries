import { createEffect, createResource, createSignal, onMount } from 'solid-js';


export default function List(props) {
  // const [countries, setCountries] = createSignal([]);
  // const sortedCountries = [...countries];

  // onMount(async () => {
  //   const res = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,region,flag,subregion,altSpellings`);
  //   setCountries(await res.json());
  // });

  // const sortedCountries = setCountries.sort((a, b) => {
  //   const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
  //   const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  
  //   // names must be equal
  //   return 0;
  // });

	return (
		<>

        {/* <!-- Table head --> */}
        <div class="-mx-4 sm:mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table id="countryTable" class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th onclick="sortTable(0)" scope="col" class="hover:cursor-pointer py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                <th onclick="sortTable(1)" scope="col" class="hover:cursor-pointer hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Region</th>
                <th onclick="sortTable(2)" scope="col" class="hover:cursor-pointer hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Subregion</th>
                <th onclick="sortTable(3)"  scope="col" class="hover:cursor-pointer hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Capital</th>
                <th scope="col" class="relative sm:mr-0 py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Learn More</span>
                </th>
              </tr>
            </thead>
            {/* <!-- Table body  --> */}
            {/* <!-- The first hidden span is so the sortTable() function can properly sort by name  --> */}
                <tbody class="divide-y divide-gray-200 bg-white">
                  <For each={countries()}>{(country => (
                    <>
                      <tr class="hover:bg-gray-100 hover:cursor-pointer" onclick="window.location='#';">
                        <td class="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          <span hidden>{country.name.common}</span> 
                          <span class="mr-2">{country.flag}</span>
                          {country.name.common}
                          <span>({country.altSpellings[0]})</span>
                        </td>
                        <td class="hidden whitespace-nowrap  px-3 py-4 text-sm text-gray-500 sm:table-cell">{country.region}</td>
                        <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">{country.subregion}</td>
                        <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">{country.capital}</td>
                        <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" class="-ml-16 sm:-ml-0 text-indigo-600 hover:text-indigo-900">
                            Learn More
                          </a>
                        </td>
                      </tr>
                    </>
                  ))}
                  </For>
                  </tbody>
            </table>
            </div>
		</>
	);
}
