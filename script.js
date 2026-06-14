function showSection(sectionId, event) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else if (event && event.target) {
        event.target.classList.add('active');
    }
    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('collapsed');
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

function toggleView(view) {
    const calendarView = document.getElementById('calendar-view');
    const listView = document.getElementById('list-view');
    const buttons = document.querySelectorAll('.view-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (view === 'calendar') {
        calendarView.parentElement.style.display = 'block';
        listView.parentElement.style.display = 'none';
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    } else {
        calendarView.parentElement.style.display = 'none';
        listView.parentElement.style.display = 'block';
        buttons[0].classList.remove('active');
        buttons[1].classList.add('active');
    }
}
