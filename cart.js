item_names =[]
item_quantity = []
item_price =[]
c=0;
function addItem(n,m)
{
    c++;
    if(c>15)
    {
        alert("Cart Limit Exceeded")
    }
    else
    {
        x = prompt("enter the quanitity")
  //item_names.push(document.getElementById('pname').value)
        if(x!=0 && x!=null)
        {
            item_names.push(n)
            item_quantity.push(parseInt(x))
  //item_price.push(parseInt(document.getElementById('price').value))
            item_price.push(parseInt(m))
            displayCart();
        }
      }
}
function addItemIcecream(n)
{
    c++;
    if(c>15)
    {
        alert("Cart Limit Exceeded")
    }
    else
    {
        y = prompt("enter the size (S/M/L)")
        x = prompt("enter the quantity")
        if(y=='S' || y =='s')
        {
            m = 80;
        }
        else if(y=='m' || y=='M')
        {
            m = 120;
        }
        else if(y=='l' || y=='L')
        {
            m = 180;
        }
  //item_names.push(document.getElementById('pname').value)
        if(x!=0 && x!=null)
        {
            item_names.push(n)
            item_quantity.push(parseInt(x))
  //item_price.push(parseInt(document.getElementById('price').value))
            item_price.push(parseInt(m))
            displayCart();
        }
    }
}
function addItemShakes(n)
{
    c++;
    if(c>15)
    {
        alert("Cart Limit Exceeded")
    }
    else
    {
        y = prompt("enter the size (S/M/L)")
        x = prompt("enter the quantity")
        if(y=='S' || y =='s')
        {
            m = 120;
        }
        else if(y=='m' || y=='M')
        {
            m = 180;
        }
        else if(y=='l' || y=='L')
        {
            m = 240;
        }
  //item_names.push(document.getElementById('pname').value)
        if(x!=0 && x!=null)
        {
            item_names.push(n)
            item_quantity.push(parseInt(x))
  //item_price.push(parseInt(document.getElementById('price').value))
            item_price.push(parseInt(m))
            displayCart();
        }
    }
}

function displayCart()
{
    cartdata = '<span style="float:right"><table style=""><tr><th>Product Name</th><th>quantity</th><th>price</th><th>total</th></tr>';
    total =0;
    for(i=0;i<item_names.length;i++)
    {
        total+= item_quantity[i]*item_price[i];
        cartdata+="<tr><td>"+item_names[i]+"</td><td>"+item_quantity[i]+"</td><td>"+item_price[i]+"</td><td>"+item_quantity[i]*item_price[i]+"</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"

    }
    cartdata+='<tr><td></td><td></td><td></td><td>'+ total+'</td></tr></table><button style="float:right">Place Order</button></span>'
    document.getElementById('cart').innerHTML = cartdata;
    document.getElementById('cart_tab').innerHTML = cartdata;

}

function delElement(a)
{
    item_names.splice(a,1);
    item_quantity.splice(a,1);
    item_price.splice(a,1);
    displayCart();
}
