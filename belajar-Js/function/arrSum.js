let c = "1000000001 1000000002 1000000003 1000000004 1000000005";
let d = c.split(" ").map(e=>parseInt(e));
let h = d.reduce((f,n)=>f+=n);
console.log(h)