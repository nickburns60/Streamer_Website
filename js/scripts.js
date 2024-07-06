let schedule = [
    {id: 'Monday', day: 'Monday', streaming: 'Hunt: Showdown', time: '5:00pm'},
    {id: 'Tuesday', day: 'Tuesday', streaming: 'Elden Ring', time: '6:00pm'},
    {id: 'Wednesday', day: 'Wednesday', streaming: 'No Stream Today', time: '------'},
    {id: 'Thursday', day: 'Thursday', streaming: 'Grounded', time: '6:00pm'},
    {id: 'Friday', day: 'Friday', streaming: 'No Stream Today', time: '------'},
    {id: 'Saturday', day: 'Saturday', streaming: 'Grounded', time: '12:00pm'},
    {id: 'Sunday', day: 'Sunday', streaming: 'Hunt: Showdown', time: '1:00pm'}
]

function displaySchedule() {
    const table = document.querySelector('table')
    schedule.forEach((line) => {
        const tr = document.createElement('tr')
        const dayOfWeek = document.createElement('td')
        dayOfWeek.innerText = line.day
        const stream = document.createElement('td')
        stream.innerText = line.streaming
        const timeOf = document.createElement('td')
        timeOf.innerText = line.time
        tr.appendChild(dayOfWeek)
        tr.appendChild(stream)
        tr.appendChild(timeOf)
        table.appendChild(tr)
        tr.classList.add('streamInfo')
    })
}

document.addEventListener('DOMContentLoaded', () => {
    displaySchedule()
})