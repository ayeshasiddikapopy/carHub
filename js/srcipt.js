let showfunc = (marks) => {
    // let msg = marks || 'abset' //because of || (or) method 0 doesnt count on
    let msg = marks ?? 'abset'
    console.log(msg)
}
showfunc(3)
showfunc(30)
showfunc(0)