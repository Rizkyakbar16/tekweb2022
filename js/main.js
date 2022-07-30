const myApi = "https://ourapi.rzkiy.my.id/";
Vue.createApp({
  data() {
    return {
      //buat nyimpen data artikelnyaa
      list_artikel: {},
      list_portofolio: {},
      list_user: {},
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
              j: "Level",
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
              p: "16 Desember 2002"
            },
            {
              n: "Telepon",
              p: "+62 831-6845-9045"
            },
            {
              n: "Kota",
              p: "Pematangsiantar"
            }

          ],
          bawah: [
            {
              n: "Umur",
              p: "20 Tahun"
            },
            {
              n: "Pendidikan",
              p: "Sarjana"
            },
            {
              n: "Hobby",
              p: "Baca Novel"
            },
            {
              n: "Email",
              p: "Kiki.akbar16@gmail.com"
            }
          ]
        },

        j_cerita: "Cerita singkat",

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
        t1: "Hello, I am",
        t2: "a student from Ahmad Dahlan University, nice to meet you!",
        header: "Let me introduce myself",
        footer: "This website still not responsive (appologize for that.)",
        buletan: "Welcome • to • My • Portfolio •"

      }

    };
  },
  methods: { //tempat menambahkan fungsi-fungsi
    getArtikel() {
      axios
        .get(
          myApi+"artikels"
        )
        .then((res) => {
          console.log(res.data);
          this.list_artikel = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPortofolio() {
      axios
        .get(
          myApi+"portos"
        )
        .then((res) => {
          console.log(res.data);
          this.list_portofolio = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUser() {
      axios
        .get(
          myApi+"users"
        )
        .then((res) => {
          console.log(res.data);
          this.list_user = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ambilMarkdown() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const artikel = urlParams.get('article');
      var converter = new showdown.Converter();
      console.log(artikel);
      axios
        .get(
          src = "../artikel/" + artikel
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
    this.getPortofolio(),
    this.getUser(),
    this.ambilMarkdown()
  },
}).mount("#app");

