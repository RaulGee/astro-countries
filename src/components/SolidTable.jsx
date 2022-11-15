import { h, Fragment, render, Component } from 'preact'
import {useState, useEffect} from 'preact/hooks'
import COUNTRYDATA from '../data/data.json?raw';

class List extends Component {
  
  render() {
    const countries = JSON.parse(COUNTRYDATA);
    const [q, setQ] = useState('');
    const [searchParam] = useState(['name', 'capital', 'region', 'subregion'])
    
  function sort() {
    countries.sort((a, b) => {
      const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

  sort();

  function search(countries) {
    return countries.filter((country) => {
      return searchParam.some((newCountry) => {
          return (
              country[newCountry]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1
          );
      });
    });
  }

  return (
    <>
      <div class="px-6 sm:px-8 lg:px-12 xl:px-24 2xl:px-32 py-4">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900">Countries</h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all countries included in the
              <a
                href="https://restcountries.com/#rest-countries"
                target="_blank"
                rel="noreferrer"
                class="text-indigo-600 underline"
              >
                REST Countries API
              </a>
              .
            </p>
          </div>
          {/* Search bar */}
          <div class="mt-4 inline-flex sm:mt-6 sm:ml-6 sm:flex-none">
            <div class="relative py-2 ">
              <label
                for="name"
                class="absolute -top-1 left-3 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >
                Search
              </label>
              <input
                type="text"
                name="name"
                id="searchInput"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                class="block w-full px-3 py-2 rounded-md border border-gray-300 focus:border-indigo-500  shadow-sm text-gray-900 placeholder-gray-500 sm:text-md"
                placeholder="Country Name"
              />
            </div>
          </div>
        </div>
        {/* Table head */}
        <div class="-mx-4 sm:mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table id="countryTable" class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th
                  onclick="sortTable(0)"
                  scope="col"
                  class="hover:cursor-pointer py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Name
                </th>
                <th
                  onclick="sortTable(1)"
                  scope="col"
                  class="hover:cursor-pointer hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Region
                </th>
                <th
                  onclick="sortTable(2)"
                  scope="col"
                  class="hover:cursor-pointer hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Subregion
                </th>
                <th
                  onclick="sortTable(3)"
                  scope="col"
                  class="hover:cursor-pointer hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Capital
                </th>
                <th
                  scope="col"
                  class="relative sm:mr-0 py-3.5 pl-3 pr-4 sm:pr-6"
                >
                  <span class="sr-only">Learn More</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            {/* The first hidden span is so the sortTable() function can properly sort by name */}
            <tbody class="divide-y divide-gray-200 bg-white">
              {search(countries).map((country) => {
                  return (
                    <>
                      <tr
                        class="hover:bg-gray-100 hover:cursor-pointer"
                        onclick="window.location='#';"
                      >
                        <td class="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          <span hidden>{country.name.common}</span>
                          <span>{country.flag}</span>
                          {country.name.common}
                          <span>({country.altSpellings[0]})</span>
                        </td>
                        <td class="hidden whitespace-nowrap  px-3 py-4 text-sm text-gray-500 sm:table-cell">
                          {country.region}
                        </td>
                        <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                          {country.subregion}
                        </td>
                        <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                          {country.capital}
                        </td>
                        <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            class="-ml-16 sm:-ml-0 text-indigo-600 hover:text-indigo-900"
                          >
                            Learn More
                          </a>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  } 
}

export default List