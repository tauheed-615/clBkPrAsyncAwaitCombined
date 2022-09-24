// Answer 1 and Answer 2

// using promises


// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// const promiseWifeBringingTics=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('tickets')
//     }, 3000);
// });



//  const popCorn=promiseWifeBringingTics.then((t)=>{
//     console.log('wife:i have the tickets');
//     console.log('husband:we should go in');
//     console.log('wife :no i am hungry');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`)
//     })  
// })
// const getButter=popCorn.then((t)=>{
//     console.log('husband:i got some popcorn');
//     console.log('husband:we should go in');
//     console.log('wife :no i need butter on my popcorn');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} butter`)
//     }) 
// })

// getButter.then((t)=>console.log(t));


// console.log('person 4: shows ticket');
// console.log('person 5: shows ticket');


// using async

console.log('person 1: shows ticket');
console.log('person 2: shows ticket');


const preMovie=async ()=>{
    const promiseWifeBringingTics=new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('ticket');
            resolve('ticket');
        }, 2000);
    });

    const getPopCorn=new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter=new Promise((resolve, reject) => resolve(`butter`));

    const getColdDrinks=new Promise((resolve, reject) => resolve(`coke`));

    const getCandy=new Promise((resolve, reject) => resolve(`candy`));


    let ticket=await promiseWifeBringingTics; 

    console.log(`wife:i have the ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife :no i am hungry');

    let popCorn=await getPopCorn;

    console.log( `husband:i got some${popCorn}`);
    console.log('husband:we should go in');
    console.log('wife :no i need butter on my popcorn');

    let butter=await addButter;

    console.log(`husband:i got some ${butter}`);
    console.log('husband:anything else darling');
    console.log('wife :yes ofcourse coldDrinks is needed with popcorn');
    console.log('husband:let me go and get it');


    let coldDr=await getColdDrinks;
    console.log(`husband:i got some ${coldDr}`)
    console.log('wife :lets go we are getting late');
    console.log('husband:thank you for the reminder *grins*');

    let[popcorn,candy,coke]= await Promise.all([getPopCorn,getCandy,getColdDrinks])

    console.log(`${popcorn},${candy},${coke}`,)

    // let ticket;
    // try {
    //     ticket=await promiseWifeBringingTics;
    // } catch (error) {
    //     ticket='sad face';
    // }


    

    return ticket; 
}
preMovie().then((m)=>console.log(`person 3: shows ${m}`));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');


// Answer 3 

const posts = [
    {
      title: "Post one",
      body: "This is post one",
      createdAt: new Date().getTime(),
    },
    {
      title: "Post two",
      body: "This is post two",
      createdAt: new Date().getTime(),
    },
  ];
  
  let intervalId = 0;
  function getposts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title} -last Edited on ${
          (new Date().getTime() - post.createdAt) / 1000
        } -seconds ago</li>`;
      });
      // console.log(output);
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPosts(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        const error = false;;
        if (!error) {
          resolve();
        } else {
          reject("Error:There is something wrong");
        }
      }, 1000);
    });
  }
  
  
  
  // async await
  //  async function createPosts(post) {
  //   return await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       posts.push({ ...post, createdAt: new Date().getTime() });
  //       const error = false;;
  //       if (!error) {
  //         resolve();
  //       } else {
  //         reject("Error:There is something wrong");
  //       }
  //     }, 1000);
  //   });
  // }
  
  
  // function deletePost(){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (posts.values!=0) {
  //         resolve(posts.pop());
  //       }
  //       else{
  //         reject('Array is empty now')
  //       }
          
  //     }, 1000);
  //   })
  // }
  
  // createPosts({
  //   title:'Post Third',
  //   lastActivity:'4th may'
  // })
  // .then(()=>{
  //   getposts();
  //   deletePost().then(()=>{
  //     getposts();
  //   })
  // }).catch ((err) =>
  // console.log(err));
  
  
  
  // Delete All Posts
  
  // function deleteAllPost(){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (posts.length>0) {
  //         resolve(posts.pop());
  //       }else{
  //         reject('Array is empty now')
  //       }
  //     }, 3000);
  //   })
  // }
  
  // createPosts({
  //   title:'Post Fourth',
  //   body:'This is fourth post'
  // })
  // .then(()=>{
  //   getposts();
  //   deleteAllPost().then(()=>{
  //     getposts();
  //     deleteAllPost().then(()=>{
  //       getposts();
  //       deleteAllPost().then(()=>{
  //         getposts();
  //         deleteAllPost().then(()=>{
  //           getposts();
  //           deleteAllPost().then(()=>{})
  //           .catch ((err) =>
  //           console.log(err));
  
  //         }).catch ((err) =>
  //         console.log('inside catch block', err));
  
  //       }).catch ((err) =>
  //       console.log(err));
  
  //     }).catch ((err) =>
  //     console.log(err));
      
  //   }).catch ((err) =>
  //   console.log(err));
  
  // }).catch ((err) =>
  //     console.log(err));
    
  
  
  // Promise All
  
  
  // const promise1=Promise.resolve('resolve');
  // const promise2=10;
  // const promise3=new Promise((resolve,reject)=>
  // setTimeout(resolve,2000,'GoodBye')
  // );
  
  // const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>
  //     res.json());
  
  
  // Promise.all([promise1,promise2,promise3,promise4])
  // .then(values=>console.log(values));
  
  const user={
    title:'Post Third',
    lastActivity:new Date().getTime()
  }
  
  function updateLastActivityTime(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        user.lastActivity=new Date().getTime();
        resolve(user.lastActivity);
      }, 1000);
    })
  }
  
  Promise.all([createPosts({title:'Post New',body:'inside the promise all'}),updateLastActivityTime()])
    .then(([data])=>{
      getposts();
      console.log(data);
    })
    .catch(err=>console.log(err));
  
    



//callBacks


// function place(cb1,cb2,cb3,cb4){
//     setTimeout(() => {
//         cb1(cb2,cb3,cb4);
//         console.log('got a place')
//     }, 1000);
// }

// function room(cb2,cb3,cb4){
//     setTimeout(() => {
//         cb2(cb3,cb4)
//         console.log('got a room')
//     }, 2000);
// }

// function center(cb3,cb4){
//     setTimeout(() => {
//         cb3(cb4);
//         console.log('got a center')
//     }, 2000);
// }

// function prepTime(cb4){
//     setTimeout(() => {
//         cb4();
//         console.log('preparation done')
//     }, 1000);
// }

// function upscClear(){
//     setTimeout(() => {
//         console.log('selected as DM')
//     }, 1000);
// }

// place(room,center,prepTime,upscClear);
// center();
// prepTime();
// upscClear();


//Promises


// function place(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('got a place')
//         }, 1000);
//     })
// }

// function room(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('got a room')
//         }, 2000);
//     })
// }

// function center(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('got a center')
//         }, 2000);
//     })
// }

// function prepTime(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('preparation done')
//         }, 1000);
//     })
// }

// function upscClear(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('selected as DM')
//         }, 2000);
//     })
// }

// place().then((err)=>{
//     console.log(err);
//     room().then((err2)=>{
//         console.log(err2);
//         center().then((err3)=>{
//             console.log(err3);
//             prepTime().then((err4)=>{
//                 console.log(err4);
//                 upscClear().then((err5)=>{
//                     console.log(err5);
//                 })
//             })
//         })
//     })
// })


//Async Await

function place(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('got a place')
        }, 1000);
    })
}

function room(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('got a room')
        }, 2000);
    })
}

function center(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('got a center')
        }, 2000);
    })
}

function prepTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('preparation done')
        }, 1000);
    })
}

function upscClear(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('selected as DM')
        }, 1000);
    })
}


async function story(){
    const pl=await place();
    console.log(pl);
    const rm=await room();
    console.log(rm)
    const ct=await center();
    console.log(ct)
    const pt=await prepTime();
    console.log(pt)
    const sucess=await upscClear();
    console.log(sucess);
}
story();