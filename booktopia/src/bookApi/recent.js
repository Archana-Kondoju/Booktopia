// {"status":"ok","total":20,"books":
import * as genresAPI from "./genres";

const books=
    [{_id:"191204742X",
      title:"The Official Raspberry Pi Handbook 2023",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "computer science" },
      subtitle:"",authors:"David Crookes, PJ Evans, Rosie Hattersley, Phil King, Nicola King, KG Orphanides, Nik Rawlinson, Mark Vanstone",
      image:"https://www.dbooks.org/img/books/191204742Xs.jpg",
      url:"https://www.dbooks.org/the-official-raspberry-pi-handbook-2023-191204742x/",
      description: "#"  
    },

      {_id:"5685804586",
      title:"Pay for Play",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "History" },
      subtitle:"How the Music Industry Works, Where the Money Goes, and Why",
      authors:"Larry Wayte",
      image:"https://www.dbooks.org/img/books/5685804586s.jpg",
      url:"https://www.dbooks.org/pay-for-play-5685804586/",
      description: "https://www.dbooks.org/pay-for-play-5685804586/read/"  
    },

      {_id:"1642002275",
      title:"Azure Bot Service Succinctly",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "computer science" },
      subtitle:"",
      authors:"Ed Freitas",
      image:"https://www.dbooks.org/img/books/1642002275s.jpg",
      url:"https://www.dbooks.org/azure-bot-service-succinctly-1642002275/",
      description: "#"  
    },

      {_id:"1607826593",
      title:"Introductory Algebra",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "History" },
      subtitle:"",
      authors:"Anne Gloag, Andrew Gloag, Melissa Kramer",
      image:"https://www.dbooks.org/img/books/1607826593s.jpg",
      url:"https://www.dbooks.org/introductory-algebra-1607826593/",
      description: "#"  
    },

      {_id:"1098111389",
      title:"Managing Cloud Native Data on Kubernetes",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "History" },
      subtitle:"Architecting Cloud Native Data Services Using Open Source Technology",
      authors:"Jeff Carpenter, Patrick McFadin",
      image:"https://www.dbooks.org/img/books/1098111389s.jpg",
      url:"https://www.dbooks.org/managing-cloud-native-data-on-kubernetes-1098111389/",
      description: "#"  
    },

      {_id:"1912047446",
      title:"An Introduction to C &amp; GUI Programming",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "computer science" },
      subtitle:"",
      authors:"Simon Long",
      image:"https://www.dbooks.org/img/books/1912047446s.jpg",
      url:"https://www.dbooks.org/an-introduction-to-c-gui-programming-1912047446/",
      description: "#"  
    },

      {_id:"1711470546",
      title:"Contemporary Mathematics",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "mathematics" },
      subtitle:"",
      authors:"Donna Kirk",
      image:"https://www.dbooks.org/img/books/1711470546s.jpg",
      url:"https://www.dbooks.org/contemporary-mathematics-1711470546/",
      description: "#"  
    },

      {_id:"1805110195",
      title:"The Last Man Who Knew Everything",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "History" },
      subtitle:"Thomas Young",
      authors:"Andrew Robinson",
      image:"https://www.dbooks.org/img/books/1805110195s.jpg",
      url:"https://www.dbooks.org/the-last-man-who-knew-everything-1805110195/",
      description: "#"  
    },

      {_id:"5685527822",
      title:"HackSpace Magazine: Issue 65",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "computer science" },
      subtitle:"April 2023",
      authors:"HackSpace Team",
      image:"https://www.dbooks.org/img/books/5685527822s.jpg",
      url:"https://www.dbooks.org/hackspace-magazine-issue-65-5685527822/",
      description: "#"  
    },

      {_id:"5685535457",
      title:"Intro to Social Media",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "History" },
      subtitle:"",
      authors:"Cheryl Lawson",
      image:"https://www.dbooks.org/img/books/5685535457s.jpg",
      url:"https://www.dbooks.org/intro-to-social-media-5685535457/",
      description: "#"  
    },

      {_id:"5679752518",
      title:"HackSpace magazine: Issue 64",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "computer science" },
      subtitle:"March 2023",
      authors:"HackSpace Team",
      image:"https://www.dbooks.org/img/books/5679752518s.jpg",
      url:"https://www.dbooks.org/hackspace-magazine-issue-64-5679752518/",
      description: "#"  
    },

      {_id:"5679742652",
      title:"Introduction to Mechanical Engineering Design",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "History" },
      subtitle:"",authors:"Jacqulyn A. Baughman",
      image:"https://www.dbooks.org/img/books/5679742652s.jpg",
      url:"https://www.dbooks.org/introduction-to-mechanical-engineering-design-5679742652/",
      description: "#"  
    },

      {_id:"1642002305",
      title:"Svelte Succinctly",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "History" },
      subtitle:"",
      authors:"Ed Freitas",
      image:"https://www.dbooks.org/img/books/1642002305s.jpg",
      url:"https://www.dbooks.org/svelte-succinctly-1642002305/",
      description: "#"  
    },

      {_id:"1800644124",
      title:"Introduction to Systems Biology",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "mathematics" },
      subtitle:"Workbook for Flipped-classroom Teaching",
      authors:"Thomas Sauter, Marco Albrecht",
      image:"https://www.dbooks.org/img/books/1800644124s.jpg",
      url:"https://www.dbooks.org/introduction-to-systems-biology-1800644124/",
      description: "#"  
    },

      {_id:"111954601X",
      title:"Blockchain For Dummies",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "mathematics" },
      subtitle:"",
      authors:"Manav Gupta",
      image:"https://www.dbooks.org/img/books/111954601Xs.jpg",
      url:"https://www.dbooks.org/blockchain-for-dummies-111954601x/",
      description: "#"  
    },

      {_id:"1642002283",
      title:"ASP.NET Core APIs Succinctly",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "mathematics" },
      subtitle:"",authors:"Dirk Strauss"
      ,image:"https://www.dbooks.org/img/books/1642002283s.jpg"
      ,url:"https://www.dbooks.org/aspnet-core-apis-succinctly-1642002283/",
      description: "#"  
    },

      {_id:"9463666656"
      ,title:"Numerical Methods for Ordinary Differential Equations",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "mathematics" }
      ,subtitle:""
      ,authors:"Kees Vuik, Fred Vermolen, Martin van Gijzen"
      ,image:"https://www.dbooks.org/img/books/9463666656s.jpg"
      ,url:"https://www.dbooks.org/numerical-methods-for-ordinary-differential-equations-9463666656/",
      description: "#"  
    },

      {_id:"1492095176",
      title:"A Practical Guide to Cloud Migration",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "mathematics" },
      subtitle:"Essays on Organizational Transformation from Google Practitioners"
      ,authors:"Kieran Broadfoot"
      ,image:"https://www.dbooks.org/img/books/1492095176s.jpg"
      ,url:"https://www.dbooks.org/a-practical-guide-to-cloud-migration-1492095176/",
      description: "#"  
    },

      {_id:"1800648723",
      title:"The European Experience",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "mathematics" },
      subtitle:"A Multi-Perspective History of Modern Europe, 1500-2000",
      authors:"Jan Hansen, Jochen Hung, Jaroslav Ira, Judit Klement, Sylvain Lesage, Juan Luis Simal, Andrew Tompkins",
      image:"https://www.dbooks.org/img/books/1800648723s.jpg",
      url:"https://www.dbooks.org/the-european-experience-1800648723/",
      description: "#"  
    },
      
      {_id:"5676984863",
      title:"HackSpace Magazine: Issue 63",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "mathematics" },
      subtitle:"February 2023",
      authors:"HackSpace Team",
      image:"https://www.dbooks.org/img/books/5676984863s.jpg",
      url:"https://www.dbooks.org/hackspace-magazine-issue-63-5676984863/",
      description: "#"
      }];

      export function getBooks() {
        return books;
      }
      
      export function getBook(id) {
        return books.find(b => b._id === id);
      }
      
      export async function saveBook(book) {
        let bookInDb = books.find(m => m._id === book._id) || {};
        bookInDb.title = book.title;
        bookInDb.genre = genresAPI.genres.find(g => g._id === book.genreId);
        bookInDb.subtitle = book.subtitle;
        bookInDb.authors = book.authors;
        bookInDb.image = book.image;
        bookInDb.url = book.url;
        bookInDb.description=book.description;
      
        if (!bookInDb._id) {
          bookInDb._id = Date.now().toString();
          books.push(bookInDb);
        }
        return await bookInDb;
      }
      
  