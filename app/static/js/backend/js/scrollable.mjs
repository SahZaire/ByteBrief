//params has div, apiUrl , ...needed info, resList 

//myCategories: Obj


export function allNewsApi(params) {
    fetch(params.apiUrl,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to make POST request');
            }
        })
        .then(data => { //-----------below goes Data usage------------
            params.resList.push(...data.output);
            updateUI({ div: params.div, resList: params.resList });
        })
        .catch(error => {
            console.error('Error making POST request:', error);
        });
}

function generateHtml(data) {
    let htmlString = `
        <div>
            <h2>Category: ${data.category}</h2>
            <p>Title: ${data.title}</p>
        </div>
    `;
    return htmlString
}

function updateUI(params) {
    for (let i = 0; i < params.resList.length; i++) {
        const postElement = document.createElement('p');
        postElement.innerHTML = generateHtml({
            category: params.resList[i].category,
            title: params.resList[i].title
        });
        params.div.appendChild(postElement);
    }
}