const fetchData = async () => {
    const email = document.getElementById('email').value;
    const resultDiv = document.getElementById('result');

    if (!email) return resultDiv.innerHTML = 'Please enter an email';

     // Hashing email and Fetch Gravatar
    const hashedEmail = CryptoJS.SHA256(email);

    const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}`;

    const img = document.createElement('img');
        img.src = gravatarUrl;
        img.alt = 'Gravatar';
        img.width = 100;
        img.height = 100;
        resultDiv.appendChild(img);


    // Fetch GitHub repositories
    const searchUrl = `https://api.github.com/search/commits?q=author-email:${encodeURIComponent(email)}&per_page=1`;
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    
    if (searchData.total_count > 0) {
        const username = searchData.items[0].author.login;
        const reposUrl = `https://api.github.com/users/${username}/repos`;
        const reposResponse = await fetch(reposUrl);
        const reposData = await reposResponse.json();
        if (reposData.length > 0) {
            const ul = document.createElement('ul');
            reposData.forEach(repo => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = repo.html_url;
                a.target = '_blank';
                a.textContent = repo.name;
                li.appendChild(a);
                ul.appendChild(li);
            });
            resultDiv.appendChild(ul);
        } else {
            const p = document.createElement('p');
            p.textContent = 'No GitHub repositories found';
            resultDiv.appendChild(p);
        }
    } else {
        const p = document.createElement('p');
        p.textContent = 'No GitHub users found with this email';
        resultDiv.appendChild(p);
    }
}
