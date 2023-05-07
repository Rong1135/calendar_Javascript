// 設定日期 - 顯示當前月份的行事曆
var today = new Date()
var currentMonth = today.getMonth()
var currentYear = today.getFullYear()

var title = document.getElementById('calendarTitle')
var prev = document.getElementById('prev')
var next = document.getElementById('next')

prev.addEventListener('click', function() {
    currentMonth--
    if(currentMonth < 0)
    {
        currentMonth = 11   // 12月
        currentYear--
    }
    generateCalendar()
})

next.addEventListener('click', function() {
    currentMonth++
    if(currentMonth > 11)
    {
        currentMonth = 0
        currentYear++
    }
    generateCalendar()
})

// 在這裡使用JavaScript生成行事曆
function generateCalendar() 
{
    // 更新標題中的年份和月份
    title.innerHTML = currentYear + "年" + (currentMonth+1) + "月"
    
    var calendar = document.getElementById('calendar')
    
    // 清除先前的日曆
    calendar.innerHTML = ''

    // 創建表格元素
    var table = document.createElement('table')
    table.setAttribute('class', 'calendar-table')

    // 創建表頭元素
    var thead = document.createElement('thead')

    // 創建表身元素
    var tbody = document.createElement('tbody')
    
    // 在表頭中添加星期幾的標題
    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var tr = document.createElement('tr')

    for(var i = 0; i < weekdays.length; i++)
    {
        var th = document.createElement('th')
        th.textContent = weekdays[i]
        tr.appendChild(th)
    }
    thead.appendChild(tr)

    // 在表身中添加日期
    var daysInMonth = new Date(currentYear, currentMonth+1, 0).getDate()    // 當月一共有幾天
    var date = new Date(currentYear, currentMonth, 1)   // 當月的第一天
    var row = document.createElement('tr')
    var dayOfWeek = date.getDate()

    for(var i = 0; i < dayOfWeek; i++)
    {
        var td = document.createElement('td')
        td.setAttribute('class', 'empty-cell')
        row.appendChild(td)
    }

    // days
    for(var i = 1; i <= daysInMonth; i++)
    {
        var td = document.createElement('td')
        td.textContent = i
        row.appendChild(td)

        if((i + dayOfWeek) % 7 === 0 || i === daysInMonth)
        {
            tbody.appendChild(row)
            row = document.createElement('tr')
        }
    }

    // 將表頭和表身添加到表格中
    table.appendChild(thead)
    table.appendChild(tbody)

    // 在行事曆容器中添加表格
    calendar.appendChild(table)
}

// 在這裡使用JavaScript添加事件
function addEvent() 
{
    var cells = document.getElementsByTagName('td')
    for(var i = 0; i < cells.length; i++)
    {
        cells[i].addEventListener('click', function() {
            alert("您選擇的日期是 " + this.textContent)
        })
    }
    // console.log(cells)
}

// 在這裡使用JavaScript刪除事件
function removeEvent()
{
    var cells = document.getElementsByTagName('td')
    for(var i = 0; i < cells.length; i++)
    {
        cells[i].removeEventListener('click', function() {
            alert('您選擇的日期是 ' + this.textContent)
        })
    }
}

window.onload = function() {
    generateCalendar()
    addEvent()
}
