function APICALL(method, URL, cb) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        cb(JSON.parse(xhr.responseText))
    })
    xhr.open(method, URL);
    xhr.send();
}
APICALL('GET', 'https://dummyjson.com/users', (usersData) => {
    APICALL('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postData) => {
        APICALL('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentsData) => {
            APICALL('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
                APICALL('GET', `https://dummyjson.com/carts/user/${userData.id}`, (cartsData) => {
                    APICALL('GET',`https://dummyjson.com/products/${cartsData.carts[0].products[0].id}`,(productData)=>{
                        console.log(productData);
                    });
                });
            });
        });
    });
});