document.getElementById("chkbx").addEventListener('click',()=>{
    let resString = `<input type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
    placeholder="Coupon Code..">`
    let result =document.getElementById('resStr');
    result.innerHTML = resString;
});
