let blogs = [
    {
        id: 1,
        title: 'Anh Bon',
        content: 'yeu em Hanh',
        img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/chup-anh-sen-ho-tay.jpg'
    },
    {
        id: 2,
        title: 'Anh Bon 2',
        content: 'yeu em Hanh',
        img: 'https://lapvui.com/wp-content/uploads/2022/04/tu-the-chup-anh-voi-hoa-sen-thumb.jpg'
    },
    {
        id: 3,
        title: 'Anh Bon 3',
        content: 'yeu em Hanh',
        img: 'https://sheis.vn/wp-content/uploads/2022/05/cac-tu-the-chup-anh-voi-hoa-sen-11.jpg'
    },
]

function show() {
    let str = '';

    for (let i = 0; i < blogs.length; i++) {
        str += `<div class="col-sm-4">
            <h2>${blogs[i].title}</h2>
            <img src="${blogs[i].img}" width="300" height="200">
            <p>${blogs[i].content}</p>
            <a type="button" class="btn btn-warning" onclick="edit(${i})">Edit</a>
            <a type="button" class="btn btn-danger" id="delete" onclick="xoa(${i})">Delete</a>
        </div>`
    }

    document.getElementById("show").innerHTML = str;
}

show();

function edit(index) {

    let title = prompt("Nhập title muốn sửa");
    let content = prompt("Nhập content muốn sửa");
    let img = prompt("Nhập link ảnh muốn sửa");
    if (img.trim() === "" || title.trim() === "" || content.trim() === "") {
        alert("Xin vui lòng nhập đầy đủ thông tin");
    } else {
        blogs.splice(index, 1, {'id': blogs[index].id, 'title': title, 'content': content, 'img': img});
    }
    show();
}

function add() {
    let id = prompt("Nhập id");
    let title = prompt("Nhập title");
    let content = prompt("Nhập content");
    let img = prompt("Nhập link ảnh");

    blogs.push({'id': id, 'title': title, 'content': content, 'img': img})

    show();
}

function xoa(index) {
    let xacnhanxoa = confirm("Bạn có chắc chắn muốn xóa: " + blogs[index].title + "???");
    if (xacnhanxoa === true) {
        blogs.splice(index, 1);
    }
    show();
}

function clear() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputContent").value = "";
    document.getElementById("inputImg").value = "";
}