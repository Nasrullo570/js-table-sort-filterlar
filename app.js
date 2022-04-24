    let userss = ["N", "Ismi", "Yoshi", "Yili", "Jinsi", "No'mer"];
    let y = ""
    for (let i = 0; i < userss.length; i++) {
      y += `<th>${userss[i]}</th>`
    }

    document.getElementById('tr').innerHTML = y;

    let users = [{
        name: 'Nasrullo',
        age: 25,
        years: 1997,
        gander: 'Erkak',
        number: 998991553047
      },
      {
        name: 'Abdullo',
        age: 16,
        years: 2006,
        gander: 'Erkak',
        number: 998991552123
      },
      {
        name: 'Gulshan',
        age: 17,
        years: 2005,
        gander: 'Ayol',
        number: 998996653244
      },
      {
        name: 'Hayot',
        age: 18,
        years: 2004,
        gander: 'Erkak',
        number: 998991594868
      },
      {
        name: 'Nilufar',
        age: 17,
        years: 2005,
        gander: 'Ayol',
        number: 998996985836
      },
      {
        name: 'Nabi',
        age: 29,
        years: 1994,
        gander: 'Erkak',
        number: 998991593562
      },
      {
        name: 'Zebo',
        age: 17,
        years: 2005,
        gander: 'Ayol',
        number: 998996653278
      },
      {
        name: 'Ali',
        age: 18,
        years: 2004,
        gander: 'Erkak',
        number: 998991593578
      },
      {
        name: 'Farog\'at',
        age: 17,
        years: 2005,
        gander: 'Ayol',
        number: 998996653245
      },
      {
        name: 'Ibrohim',
        age: 18,
        years: 2004,
        gander: 'Erkak',
        number: 998991593562
      },
      {
        name: 'Shohsanam',
        age: 17,
        years: 2005,
        gander: 'Ayol',
        number: 998996653236
      },
      {
        name: 'Maqsad',
        age: 18,
        years: 2004,
        gander: 'Erkak',
        number: 998991593545
      },
      {
        name: 'Nargiza',
        age: 24,
        years: 1998,
        gander: 'Ayol',
        number: 9989966537812
      },
      {
        name: 'Jonibek',
        age: 19,
        years: 2004,
        gander: 'Erkak',
        number: 998991593478
      },
      {
        name: 'Anagul',
        age: 17,
        years: 2005,
        gander: 'Ayol',
        number: 998996653230
      },
      {
        name: 'Rustam',
        age: 18,
        years: 2004,
        gander: 'Erkak',
        number: 998991593562
      },
      {
        name: 'Nasiba',
        age: 18,
        years: 2004,
        gander: 'Ayol',
        number: 998996653220
      },
      {
        name: 'Olloshkur',
        age: 33,
        years: 1990,
        gander: 'Erkak',
        number: 998991593551
      },
      {
        name: 'Bohram',
        age: 18,
        years: 2004,
        gander: 'Erkak',
        number: 998997526525
      },
      {
        name: 'Og\'abek',
        age: 18,
        years: 2004,
        gander: 'Erkak',
        number: 998999516220
      },
      {
        name: 'Gulshan',
        age: 20,
        years: 2003,
        gander: 'Ayol',
        number: 998991592635
      },
      {
        name: 'Mohira',
        age: 22,
        years: 2000,
        gander: 'Ayol',
        number: 998994521526
      },
      {
        name: 'Shaydo',
        age: 18,
        years: 2005,
        gander: 'Ayol',
        number: 998997892514
      },
      {
        name: 'Yo\'ldosh',
        age: 18,
        years: 2004,
        gander: 'Erkak',
        number: 998939632514
      },
      {
        name: 'Anvar',
        age: 17,
        years: 2005,
        gander: 'Ayol',
        number: 998917896512
      },
      {
        name: 'Mansur',
        age: 22,
        years: 2000,
        gander: 'Erkak',
        number: 998996567845
      },
      {
        name: 'Gulmira',
        age: 24,
        years: 1998,
        gander: 'Ayol',
        number: 998901236598
      },
      {
        name: 'Sobir',
        age: 19,
        years: 2003,
        gander: 'Erkak',
        number: 998941564865
      },
      {
        name: 'Dilmurod',
        age: 23,
        years: 1999,
        gander: 'Erkak',
        number: 998937564450
      },
     
      {
        name: 'Dilbek',
        age: 22,
        years: 2000,
        gander: 'Erkak',
        number: 998991562055
      },

    ]

    function table(arr) {
      let s = ''
      for (let i = 0; i < arr.length; i++) {
        s += `<tr>
        <td>${i+1}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].years}</td>  
        <td>${arr[i].gander}</td>
        <td>${arr[i].number}</td>
      </tr>`
      }

      document.getElementById('tbody').innerHTML = s
    }
    table(users)


    function filter() {
      let newUsers = users.filter(item => {
        return item.age > 18
      })
      table(newUsers)
    }
    function sort() {
      let newUsers = users.sort((a, b) => {
        return a.age - b.age 
      })
      table(newUsers)
    }
    function erkak(){
      let newUsers = users.filter(item =>{
        return item.gander == 'Erkak'
      })
      table(newUsers)
    }
    function ayollar(){
      let newUsers = users.filter(item =>{
        return item.gander == 'Ayol'
      })
      table(newUsers)

    }