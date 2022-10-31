import { createSignal } from 'solid-js'
import Table from './SolidTable'

export default function Search() {
  const [inputText, setInputText] = createSignal("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  return(
    <div class="px-6 sm:px-8 lg:px-12 xl:px-24 2xl:px-32 py-4">
      <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-xl font-semibold text-gray-900">Countries</h1>
              <p class="mt-2 text-sm text-gray-700">A list of all countries included in the 
                <a href="https://restcountries.com/#rest-countries" target="_blank" rel="noreferrer" class="text-indigo-600 underline">REST Countries API</a>.
              </p>
            </div>
            {/* <!-- Search bar --> */}
            <div class="mt-4 inline-flex sm:mt-6 sm:ml-6 sm:flex-none">
              <div class="relative py-2 ">
                <label for="name" class="absolute -top-1 left-3 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">
                  Search
                </label>
                <input 
                type="text" 
                name="name" 
                id="searchInput" 
                onkeyup="searchTable()" 
                placeholder="Country Name"
                class="block w-full px-3 py-2 rounded-md border border-gray-300 focus:border-indigo-500  shadow-sm text-gray-900 placeholder-gray-500 sm:text-md"/>
              </div>
          </div>
        </div>
        <Table input={inputText} />
      </div>
  )
}