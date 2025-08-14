let codeData = {};
let typingSpeedRange=[15,50];
let lastIndex = {}; // track last snippet for each language-topic

// Load JSON
fetch('codes.json').then(res=>res.json()).then(data=>{ codeData=data; populateLanguages(); });

// Populate language dropdown
function populateLanguages(){
  const langSelect=document.getElementById('languageSelect');
  Object.keys(codeData).forEach(lang=>{
    let option=document.createElement('option'); option.value=lang; option.textContent=lang; langSelect.appendChild(option);
  });
}

// Populate topics dropdown
document.getElementById('languageSelect').addEventListener('change', function(){
  const topicSelect=document.getElementById('topicSelect'); topicSelect.innerHTML='<option value="">Select Topic</option>';
  const lang=this.value;
  if(lang){
    Object.keys(codeData[lang]).forEach(topic=>{
      let option=document.createElement('option'); option.value=topic; option.textContent=topic; topicSelect.appendChild(option);
    });
    topicSelect.disabled=false;
  } else topicSelect.disabled=true;
});

// Load a random snippet (different from last one)
document.getElementById('topicSelect').addEventListener('change', function(){
  const lang=document.getElementById('languageSelect').value;
  const topic=this.value;
  if(lang && topic){
    const codes=codeData[lang][topic];
    let randomIndex;
    do {
      randomIndex=Math.floor(Math.random()*codes.length);
    } while(codes.length>1 && randomIndex === (lastIndex[lang+'-'+topic]||-1));
    lastIndex[lang+'-'+topic]=randomIndex;
    const codeToLoad = codes[randomIndex];
    typeCode(codeToLoad, lang);
  }
});

// Typing animation (preserve formatting)
function typeCode(text, language){
  const codeEl = document.getElementById('code');
  codeEl.className = 'language-' + (language.toLowerCase() === 'javascript' ? 'javascript' : language.toLowerCase());
  codeEl.textContent = '';
  let index = 0;
  const codeBox = document.getElementById('codeBox');

  function typeChar() {
    if (index < text.length) {
      let char = text[index++];
      codeEl.textContent += char;  // type as-is
      Prism.highlightElement(codeEl);
      codeBox.scrollTop = codeBox.scrollHeight;
      codeBox.scrollLeft = codeBox.scrollWidth;
      setTimeout(typeChar, Math.floor(Math.random()*(typingSpeedRange[1]-typingSpeedRange[0]+1)) + typingSpeedRange[0]);
    }
  }
  typeChar();
}

// Copy code to clipboard
document.querySelector('.copy-btn').addEventListener('click', ()=>{
  const codeText=document.getElementById('code').textContent;
  navigator.clipboard.writeText(codeText).then(()=>{
    alert('Code copied to clipboard!');
  });
});
let codeData = {};
let typingSpeedRange=[15,50];
let lastIndex = {}; // track last snippet for each language-topic

// Load JSON
fetch('codes.json').then(res=>res.json()).then(data=>{ codeData=data; populateLanguages(); });

// Populate language dropdown
function populateLanguages(){
  const langSelect=document.getElementById('languageSelect');
  Object.keys(codeData).forEach(lang=>{
    let option=document.createElement('option'); option.value=lang; option.textContent=lang; langSelect.appendChild(option);
  });
}

// Populate topics dropdown
document.getElementById('languageSelect').addEventListener('change', function(){
  const topicSelect=document.getElementById('topicSelect'); topicSelect.innerHTML='<option value="">Select Topic</option>';
  const lang=this.value;
  if(lang){
    Object.keys(codeData[lang]).forEach(topic=>{
      let option=document.createElement('option'); option.value=topic; option.textContent=topic; topicSelect.appendChild(option);
    });
    topicSelect.disabled=false;
  } else topicSelect.disabled=true;
});

// Load a random snippet (different from last one)
document.getElementById('topicSelect').addEventListener('change', function(){
  const lang=document.getElementById('languageSelect').value;
  const topic=this.value;
  if(lang && topic){
    const codes=codeData[lang][topic];
    let randomIndex;
    do {
      randomIndex=Math.floor(Math.random()*codes.length);
    } while(codes.length>1 && randomIndex === (lastIndex[lang+'-'+topic]||-1));
    lastIndex[lang+'-'+topic]=randomIndex;
    const codeToLoad = codes[randomIndex];
    typeCode(codeToLoad, lang);
  }
});

// Typing animation (preserve formatting)
function typeCode(text, language){
  const codeEl = document.getElementById('code');
  codeEl.className = 'language-' + (language.toLowerCase() === 'javascript' ? 'javascript' : language.toLowerCase());
  codeEl.textContent = '';
  let index = 0;
  const codeBox = document.getElementById('codeBox');

  function typeChar() {
    if (index < text.length) {
      let char = text[index++];
      codeEl.textContent += char;  // type as-is
      Prism.highlightElement(codeEl);
      codeBox.scrollTop = codeBox.scrollHeight;
      codeBox.scrollLeft = codeBox.scrollWidth;
      setTimeout(typeChar, Math.floor(Math.random()*(typingSpeedRange[1]-typingSpeedRange[0]+1)) + typingSpeedRange[0]);
    }
  }
  typeChar();
}

// Copy code to clipboard
document.querySelector('.copy-btn').addEventListener('click', ()=>{
  const codeText=document.getElementById('code').textContent;
  navigator.clipboard.writeText(codeText).then(()=>{
    alert('Code copied to clipboard!');
  });
});
let codeData = {};
let typingSpeedRange=[15,50];
let lastIndex = {}; // track last snippet for each language-topic

// Load JSON
fetch('codes.json').then(res=>res.json()).then(data=>{ codeData=data; populateLanguages(); });

// Populate language dropdown
function populateLanguages(){
  const langSelect=document.getElementById('languageSelect');
  Object.keys(codeData).forEach(lang=>{
    let option=document.createElement('option'); option.value=lang; option.textContent=lang; langSelect.appendChild(option);
  });
}

// Populate topics dropdown
document.getElementById('languageSelect').addEventListener('change', function(){
  const topicSelect=document.getElementById('topicSelect'); topicSelect.innerHTML='<option value="">Select Topic</option>';
  const lang=this.value;
  if(lang){
    Object.keys(codeData[lang]).forEach(topic=>{
      let option=document.createElement('option'); option.value=topic; option.textContent=topic; topicSelect.appendChild(option);
    });
    topicSelect.disabled=false;
  } else topicSelect.disabled=true;
});

// Load a random snippet (different from last one)
document.getElementById('topicSelect').addEventListener('change', function(){
  const lang=document.getElementById('languageSelect').value;
  const topic=this.value;
  if(lang && topic){
    const codes=codeData[lang][topic];
    let randomIndex;
    do {
      randomIndex=Math.floor(Math.random()*codes.length);
    } while(codes.length>1 && randomIndex === (lastIndex[lang+'-'+topic]||-1));
    lastIndex[lang+'-'+topic]=randomIndex;
    const codeToLoad = codes[randomIndex];
    typeCode(codeToLoad, lang);
  }
});

// Typing animation (preserve formatting)
function typeCode(text, language){
  const codeEl = document.getElementById('code');
  codeEl.className = 'language-' + (language.toLowerCase() === 'javascript' ? 'javascript' : language.toLowerCase());
  codeEl.textContent = '';
  let index = 0;
  const codeBox = document.getElementById('codeBox');

  function typeChar() {
    if (index < text.length) {
      let char = text[index++];
      codeEl.textContent += char;  // type as-is
      Prism.highlightElement(codeEl);
      codeBox.scrollTop = codeBox.scrollHeight;
      codeBox.scrollLeft = codeBox.scrollWidth;
      setTimeout(typeChar, Math.floor(Math.random()*(typingSpeedRange[1]-typingSpeedRange[0]+1)) + typingSpeedRange[0]);
    }
  }
  typeChar();
}

// Copy code to clipboard
document.querySelector('.copy-btn').addEventListener('click', ()=>{
  const codeText=document.getElementById('code').textContent;
  navigator.clipboard.writeText(codeText).then(()=>{
    alert('Code copied to clipboard!');
  });
});
let codeData = {};
let typingSpeedRange=[15,50];
let lastIndex = {}; // track last snippet for each language-topic

// Load JSON
fetch('codes.json').then(res=>res.json()).then(data=>{ codeData=data; populateLanguages(); });

// Populate language dropdown
function populateLanguages(){
  const langSelect=document.getElementById('languageSelect');
  Object.keys(codeData).forEach(lang=>{
    let option=document.createElement('option'); option.value=lang; option.textContent=lang; langSelect.appendChild(option);
  });
}

// Populate topics dropdown
document.getElementById('languageSelect').addEventListener('change', function(){
  const topicSelect=document.getElementById('topicSelect'); topicSelect.innerHTML='<option value="">Select Topic</option>';
  const lang=this.value;
  if(lang){
    Object.keys(codeData[lang]).forEach(topic=>{
      let option=document.createElement('option'); option.value=topic; option.textContent=topic; topicSelect.appendChild(option);
    });
    topicSelect.disabled=false;
  } else topicSelect.disabled=true;
});

// Load a random snippet (different from last one)
document.getElementById('topicSelect').addEventListener('change', function(){
  const lang=document.getElementById('languageSelect').value;
  const topic=this.value;
  if(lang && topic){
    const codes=codeData[lang][topic];
    let randomIndex;
    do {
      randomIndex=Math.floor(Math.random()*codes.length);
    } while(codes.length>1 && randomIndex === (lastIndex[lang+'-'+topic]||-1));
    lastIndex[lang+'-'+topic]=randomIndex;
    const codeToLoad = codes[randomIndex];
    typeCode(codeToLoad, lang);
  }
});

// Typing animation (preserve formatting)
function typeCode(text, language){
  const codeEl = document.getElementById('code');
  codeEl.className = 'language-' + (language.toLowerCase() === 'javascript' ? 'javascript' : language.toLowerCase());
  codeEl.textContent = '';
  let index = 0;
  const codeBox = document.getElementById('codeBox');

  function typeChar() {
    if (index < text.length) {
      let char = text[index++];
      codeEl.textContent += char;  // type as-is
      Prism.highlightElement(codeEl);
      codeBox.scrollTop = codeBox.scrollHeight;
      codeBox.scrollLeft = codeBox.scrollWidth;
      setTimeout(typeChar, Math.floor(Math.random()*(typingSpeedRange[1]-typingSpeedRange[0]+1)) + typingSpeedRange[0]);
    }
  }
  typeChar();
}

// Copy code to clipboard
document.querySelector('.copy-btn').addEventListener('click', ()=>{
  const codeText=document.getElementById('code').textContent;
  navigator.clipboard.writeText(codeText).then(()=>{
    alert('Code copied to clipboard!');
  });
});
