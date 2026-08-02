*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}

body{
    background:#f3f3f3;
}

/* Header */

.header{
    background:#131921;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 5%;
    gap:20px;
    flex-wrap:wrap;
}

.logo h2{
    color:#ff9900;
}

.search-box{
    flex:1;
    display:flex;
    max-width:700px;
}

.search-box input{
    width:100%;
    padding:12px;
    border:none;
    outline:none;
    font-size:16px;
    border-radius:5px 0 0 5px;
}

.search-box button{
    width:60px;
    background:#febd69;
    border:none;
    cursor:pointer;
    border-radius:0 5px 5px 0;
    font-size:18px;
}

.header-icons{
    display:flex;
    gap:25px;
}

.header-icons div{
    text-align:center;
    cursor:pointer;
}

.header-icons i{
    font-size:20px;
    margin-bottom:5px;
}

/* Navigation */

.navbar{
    background:#232f3e;
    padding:15px;
    display:flex;
    justify-content:center;
    gap:30px;
    flex-wrap:wrap;
}

.navbar a{
    color:#fff;
    text-decoration:none;
    font-weight:bold;
    transition:.3s;
}

.navbar a:hover{
    color:#ff9900;
}

/* Hero */

.hero{
    height:500px;
    background:url("https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1600&q=80") center/cover;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:#fff;
}

.hero-content{
    background:rgba(0,0,0,.45);
    padding:40px;
    border-radius:12px;
}

.hero h1{
    font-size:48px;
}

.hero p{
    margin:15px 0;
    font-size:20px;
}

.btn{
    display:inline-block;
    background:#ff9900;
    color:#000;
    padding:12px 30px;
    text-decoration:none;
    border-radius:30px;
    font-weight:bold;
}

.btn:hover{
    background:#e68900;
}

/* Categories */

.categories{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
    padding:50px 5%;
}

.cat-card{
    background:#fff;
    border-radius:10px;
    overflow:hidden;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.cat-card:hover{
    transform:translateY(-8px);
}

.cat-card img{
    width:100%;
    height:220px;
    object-fit:cover;
}

.cat-card h3{
    text-align:center;
    padding:20px;
}

/* Products */

.products{
    padding:50px 5%;
}

.products h2{
    margin-bottom:25px;
}

.product-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.product{
    background:#fff;
    padding:15px;
    border-radius:10px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.product:hover{
    transform:translateY(-8px);
}

.product img{
    width:100%;
    height:230px;
    object-fit:cover;
}

.product h3{
    margin:15px 0 8px;
}

.product h4{
    color:#B12704;
    margin-bottom:15px;
}

.product button{
    width:100%;
    padding:12px;
    border:none;
    background:#ffd814;
    font-weight:bold;
    cursor:pointer;
    border-radius:8px;
}

.product button:hover{
    background:#f7ca00;
}

/* Footer */

footer{
    background:#131921;
    color:#fff;
    text-align:center;
    padding:25px;
    margin-top:40px;
}

/* Mobile */

@media(max-width:768px){

.header{
    flex-direction:column;
}

.header-icons{
    gap:15px;
}

.hero{
    height:350px;
}

.hero h1{
    font-size:30px;
}

.hero p{
    font-size:16px;
}

      }
