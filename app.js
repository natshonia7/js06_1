// Faker app example



fetch('https://fakerapi.it/api/v1/companies?_quantity=1')
    .then(response => response.json())
    .then(finalData => {
        console.log(finalData.total) // ვამოწმებთ
        if (finalData.total === 1) {
            // console.log(data)       თუ აქ არასწორი რამე დაილოგება მაშინ იქნება ერორი
            const ul = document.querySelector('ul');
            console.log('success', finalData) //ვამოწმებთ ჩვენს დატას თუ რა დატა გვაქვს

            finalData.data.forEach(element => {
                const li = document.createElement('li');
                li.textContent = element.country;
                ul.appendChild(li)
            });
        } else {
            throw 'status code' + finalData
                // console.log('fail')
        }
    })
    .catch(err => {
        const p = document.createElement('p');
        p.textContent = err;
        p.style.color = 'red'
        document.body.appendChild(p)
    })


console.log('134');