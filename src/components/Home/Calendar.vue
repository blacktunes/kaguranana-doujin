<template>
  <div class="calendar">
    <a-calendar :fullscreen="false" :header-render="headerRender" @panelChange="onPanelChange">
      <template v-slot:dateCellRender="value">
        <div class="wrapper" v-if="getListData(value).length > 0">
          <a-badge class="badge" color="#108ee9" />
          <div class="item">
            <ul class="events">
              <li v-for="item in getListData(value)" :key="item.content">
                <a-badge :status="item.type" :text="item.content" />
              </li>
            </ul>
          </div>
        </div>
      </template>
    </a-calendar>
  </div>
</template>

<script>
export default {
  methods: {
    onPanelChange(e) {
      console.log(e)
    },
    headerRender({ value, type, onChange, onTypeChange }) {
      const start = 0
      const end = 12
      const monthOptions = []

      const current = value.clone()
      const localeData = value.localeData()
      const months = []
      for (let i = 0; i < 12; i++) {
        current.month(i)
        months.push(localeData.monthsShort(current))
      }

      for (let index = start; index < end; index++) {
        monthOptions.push(
          <a-select-option class="month-item" key={`${index}`}>
            {months[index]}
          </a-select-option>
        )
      }
      const month = value.month()

      const year = value.year()
      const options = []
      for (let i = year - 10; i < year + 10; i += 1) {
        options.push(
          <a-select-option key={i} value={i} class="year-item">
            {i}
          </a-select-option>
        )
      }
      return (
        <div style={{ padding: '10px' }}>
          <div style={{ marginBottom: '10px' }}>Custom header </div>
          <a-row type="flex">
            <a-space>
              <a-col>
                <a-select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  class="my-year-select"
                  onChange={newYear => {
                    const now = value.clone().year(newYear)
                    onChange(now)
                  }}
                  value={String(year)}
                >
                  {options}
                </a-select>
              </a-col>
              <a-col>
                <a-select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={String(month)}
                  onChange={selectedMonth => {
                    const newValue = value.clone()
                    newValue.month(parseInt(selectedMonth, 10))
                    onChange(newValue)
                  }}
                >
                  {monthOptions}
                </a-select>
              </a-col>
            </a-space>
          </a-row>
        </div>
      )
    },
    getListData(value) {
      let listData
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' }
          ]
          break
        case 10:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' }
          ]
          break
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' }
          ]
          break
        default:
      }
      return listData || []
    }
  }
}
</script>

<style lang="less" scoped>
.calendar {
  width: 300px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  & /deep/ .ant-fullcalendar-value {
    &:hover {
      & + .ant-fullcalendar-content {
        .item {
          display: inline;
        }
      }
    }
  }
  .wrapper {
    position: relative;
    width: 70%;
    margin: auto;
    .badge {
      bottom: 5px;
      & /deep/ .ant-badge-status-text {
        margin: 0;
      }
    }
    .item {
      z-index: 5;
      display: none;
      position: absolute;
      bottom: 150%;
      right: 105%;
      width: auto;
      background: #fff;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #000;
      animation: show 0.5s;
      .events {
        list-style: none;
        margin: 0;
        padding: 0;
        .ant-badge-status {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          text-overflow: ellipsis;
          font-size: 12px;
        }
      }
    }
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
