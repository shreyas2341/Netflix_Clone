 function increment(a) {
  return {
    type:'Inc',
    payload:a
  }
}
export{increment};


function decrement() {
    return {
      type:'Dcr'
    }
  }
  export{decrement};