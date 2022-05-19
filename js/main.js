Vue.createApp({
  data() {
    return {
      //buat nyimpen data artikelnyaa
      list_artikel: {},
      article: null,

      navbar: {
        n1: "Home",
        n2: "About Me",
        n3: "Articles",
        n4: "Portfolio",
        n5: "Contact"
      },
      about: {
        tabel: {
          judul: "Tabel Keterampilan",
          head: [
            {
              j: "Keterampilan",
            },
            {
              j:"Level",
            }
          ],
          data: [
            {
              nama: "Microsoft Word",
              kemampuan: "Advance"
            },
            {
              nama: "Microsoft Power Point",
              kemampuan: "Advance"
            },
            {
              nama: "HTML",
              kemampuan: "Intermediate"
            },
            {
              nama: "CSS",
              kemampuan: "Intermediate"
            },
            {
              nama: "Javascript",
              kemampuan: "Intermediate"
            },
            {
              nama: "Java",
              kemampuan: "Advance"
            },
            {
              nama: "Blender",
              kemampuan: "Advance"
            },
            {
              nama: "Figma",
              kemampuan: "Advance"
            },
            {
              nama: "Photoshop",
              kemampuan: "Intermediate"
            }
          ],

          
          
        },
        port: {
          atas: [
            {
              n: "Nama",
              p: "Muhammad Rizky Akbar" 
            },
            {
              n: "Tanggal Lahir",
              p: "asdas"
            },
            {
              n: "Telepon",
              p: "asdasd"
            },
            {
              n: "Kota",
              p: "asdasd"
            }

          ],
          bawah : [
            {
              n: "Umur",
              p: "Muhammad Rizky Akbar" 
            },
            {
              n: "Pendidikan",
              p: "asdawda"
            },
            {
              n: "Hobby",
              p: "awdawd"
            },
            {
              n: "Email",
              p: "awdasda"
            }
          ]
        },

        j_cerita: "Cerita singkat",
        cerita: "Aku merupakan seorang Mahasiswa di Universitas Ahmad Dahlan Yogyakarta, yang sekarang sudah berada pada semester 4. Hire me at Contact If u want to make a project with me.",

        j_s: "Skills",
        t_s: "Selama 2 tahun berkuliah di Universitas Ahmad Dahlan, aku telah mempelajari beberapa skill, diantaranya yaitu: ",
        skills: [
          "HTML",
          "CSS",
          "Javascript",
          "Java",
          "Python",
          "QGIS",
          "PHP",
          "VueJs",
          "Axios"

        ]

      },

      home: {
        nama: "Muhammad Rizky Akbar",
        t1: "Hello, I am",
        t2: "a student from Ahmad Dahlan University, nice to meet you!",
        header: "Let me introduce myself",
        footer: "This website still not responsive (appologize for that.)",
        buletan: "Welcome • to • My • Portfolio •"

      }

    };
  },
  methods: { //tempat menambahkan fungsi-fungsi
    getArtikel () {
      axios
      .get (
        "https://raw.githubusercontent.com/Rizkyakbar16/tekweb2022/main/artikel/artikel.json"
      ) 
      .then((res) => {
        console.log(res.data);
        this.list_artikel = res.data;
      })
      .catch((error) => {
        console.log(error); 
      });
    },
    ambilMarkdown()
    {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const artikel = urlParams.get('article');        
      var converter = new showdown.Converter();
      console.log(artikel);
      axios
        .get(
          "https://raw.githubusercontent.com/Rizkyakbar16/tekweb2022/main/artikel/"+artikel
        )
        .then((res) => {
          var html = converter.makeHtml(res.data);           
          this.article = html;
          console.log(html);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
    this.getArtikel(),
    this.ambilMarkdown()
  },
}).mount("#app");

