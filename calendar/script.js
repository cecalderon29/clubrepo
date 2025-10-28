const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');

let currentDate = new Date();

// Example club meeting data
const clubEvents = [
  { date: '2025-10-01', name: 'Redhawk Book Club', time: '3:30 PM', club: ' Book Club' },
  { date: '2025-10-03', name: 'Mid Autumn Festival', time: '3:30 PM', club: 'Mandarin Club' },
  { date: '2025-10-07', name: 'BPA Meeting', time: '7:15 AM', club: 'Business Professionals of America' },
  { date: '2025-10-10', name: 'MSA Bake Sale', time: '12:00 PM', club: 'Muslim Student Association' },
  { date: '2025-10-16', name: 'HOSA Meeting', time: '7:15 AM', club: 'Future Health Professionals' },
  { date: '2025-10-17', name: 'Black OUT', time: '7:00 PM', club: 'Rowdies' },
];

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  monthYear.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

  daysContainer.innerHTML = '';

  // Empty slots before the first day
  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement('div');
    empty.classList.add('day', 'empty');
    daysContainer.appendChild(empty);
  }

  // Generate days
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);
    const isoDate = date.toISOString().split('T')[0];
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');

    if (isToday(date)) dayDiv.classList.add('today');

    const dateNum = document.createElement('div');
    dateNum.classList.add('date');
    dateNum.textContent = day;
    dayDiv.appendChild(dateNum);

    const eventsDiv = document.createElement('div');
    eventsDiv.classList.add('events');

    const eventsForDay = clubEvents.filter(ev => ev.date === isoDate);
    eventsForDay.forEach(ev => {
      const evEl = document.createElement('div');
      evEl.classList.add('event');
      evEl.textContent = `${ev.name} — ${ev.club}`;
      eventsDiv.appendChild(evEl);
    });

    dayDiv.appendChild(eventsDiv);
    daysContainer.appendChild(dayDiv);
  }
}

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
