const CONDITION_AND = 'and';
const CONDITION_OR = 'or';

const globalState = {
  allDevs: [],
  filteredDevs: [],
  loadingData: true,
  currentFilterInput: '',
  programmingLanguagesCheck: [],
  conditionRadio: CONDITION_OR
};

const divDevs = document.querySelector('#divDevs');

function start() {
  fetchDevs();
}

async function fetchDevs() {
  const response = await fetch('http://localhost:3001/devs');
  const devs = await response.json();

  const devsWithImprovedSearch = devs.map((dev) => {
    const { name } = dev;
    return {
      ...dev,
      filterName: removeAccentMarksFrom(name.toLocaleLowerCase())
        .split('')
        .filter((char) => char !== ' ')
        .join('')
    };
  });

  globalState.allDevs = [...devsWithImprovedSearch];
  globalState.filteredDevs = [...devsWithImprovedSearch];
  globalState.loadingData = false;

  renderDevs();
}

function filterDevs() {
  const { programmingLanguagesCheck, allDevs } = globalState;

  globalState.filteredDevs = allDevs.filter((dev) => {
    return (
      validFilterName(dev.filterName) &&
      validProgrammingLanguage(dev.programmingLanguages)
    );
  });

  function validFilterName(name) {
    return globalState.currentFilterInput
      ? name.includes(globalState.currentFilterInput)
      : true;
  }

  function validProgrammingLanguage(devLanguages) {
    if (!programmingLanguagesCheck.length) {
      return false;
    }

    if (globalState.conditionRadio === CONDITION_OR) {
      return devLanguages.some((language) =>
        programmingLanguagesCheck.includes(language.id)
      );
    } else {
      const result = programmingLanguagesCheck.filter((language) =>
        devLanguages.some((devLanguage) => devLanguage.id === language)
      );
      return result.length === programmingLanguagesCheck.length;
    }
  }

  renderDevs();
}

function renderDevs() {
  const { filteredDevs } = globalState;
  const devsToShow = filteredDevs
    .map((dev) => {
      return `<div>
    <div class='dev-card'>
      <img class='picture' src="${dev.picture}" alt="${dev.name}" />
      <div class='data'>
        <span>${dev.name}</span>
        <div class='languages'>
          ${dev.programmingLanguages.map(
            (language) => `<span class="language">${language.language}</span>`
          )}
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('');

  const renderedHTML = `
     <div>
       <h2>${filteredDevs.length} dev(s) encontrado(s)</h2>
       <div class='row'>
         ${devsToShow}
       </div>
     </div>
  `;

  divDevs.innerHTML = renderedHTML;
}

function handleCheckboxClick({ target }) {
  const { checked, id } = target;

  if (checked) {
    globalState.programmingLanguagesCheck.push(id);
  } else {
    globalState.programmingLanguagesCheck = globalState.programmingLanguagesCheck.filter(
      (language) => language !== id
    );
  }

  filterDevs();
}

function handleInputChange({ target }) {
  globalState.currentFilterInput = removeAccentMarksFrom(
    target.value.toLocaleLowerCase().trim()
  );
  filterDevs();
}

function handleRadioChange({ target }) {
  globalState.conditionRadio = target.id;
  filterDevs();
}

function removeAccentMarksFrom(text) {
  const WITH_ACCENT_MARKS = 'áãâäàéèêëíìîïóôõöòúùûüñ'.split('');
  const WITHOUT_ACCENT_MARKS = 'aaaaaeeeeiiiiooooouuuun'.split('');

  const newText = text
    .toLocaleLowerCase()
    .split('')
    .map((char) => {
      const index = WITH_ACCENT_MARKS.indexOf(char);

      if (index > -1) {
        return WITHOUT_ACCENT_MARKS[index];
      }
      return char;
    })
    .join('');

  return newText;
}

start();
