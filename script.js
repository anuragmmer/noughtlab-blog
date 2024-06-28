document.addEventListener('DOMContentLoaded', () => {
    fetchBlogs();
});

async function fetchBlogs() {
    const response = await fetch('blogs.json');
    const blogs = await response.json();
    const blogList = document.getElementById('blog-list');

    blogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');

        const blogTitle = document.createElement('h3');
        const blogDate = document.createElement('p');
        const blogDescription = document.createElement('p');

        blogTitle.textContent = blog.title;

        blogDate.textContent = blog.date;
        blogDate.classList.add('blog-date');

        blogDescription.textContent = blog.description;
        blogDescription.classList.add('blog-description');

        blogItem.appendChild(blogTitle);
        blogItem.appendChild(blogDate);
        blogItem.appendChild(blogDescription);
        blogItem.addEventListener('click', () => showBlogContent(blog));

        blogList.appendChild(blogItem);
    });
}

function showBlogContent(blog) {
    document.getElementById('blog-list').style.display = 'none';
    document.getElementById('blog-content').style.display = 'block';
    document.getElementById('blog-content-title').textContent = blog.title;
    document.getElementById('blog-content-date').textContent = blog.date;
    document.getElementById('blog-content-paragraph').textContent = blog.paragraph;
}

function showBlogList() {
    document.getElementById('blog-list').style.display = 'block';
    document.getElementById('blog-content').style.display = 'none';
}
