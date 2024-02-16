

export function make_fetch(params) {
    console.log(params);
    fetch(params.apiUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                [params.key]: params.value
            }),
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
            // inside build.mjs
            params.updateUI({ div: params.div, resList: params.resList, genHtml: params.getHtml });
        })
        .catch(error => {
            console.error('Error making POST request:', error);
        });
}