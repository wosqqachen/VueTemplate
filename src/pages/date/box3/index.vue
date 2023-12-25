<template>
  <div class="ctitle">
    <div class="btn" style="padding-left: 0.3rem;" @click="changMonth('cut')">
      {{ preMonth }}月
    </div>
    <div class="mtxt">
      <span>{{ year }}</span
      >年<span>{{ month }}</span
      >月
    </div>
    <div class="btn rbtn" @click="changMonth('add')">{{ nextMonth }}月</div>
  </div>
  <div class="calendar-box">
    <div class="week-box">
      <div class="day-header" v-for="(w, index) in weekArr" :key="index">
        {{ w }}
      </div>
    </div>
    <div class="calendar-table">
      <div
        class="dbox"
        v-for="(item, idx) in calendarData"
        :key="idx"
        :class="{
          include: item.include,
          active: activeData && item.date === activeData.date
        }"
        @click="clickDay(item)"
      >
        <slot name="day" :row="item">
          <div :class="item.date == nowDay ? 'day nday' : 'day'">
            {{ item.date == nowDay ? "今天" : item.day2 }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    type: {
      // all 可选中显示的所有日期 portion 只能选中当前月份的数据
      type: String,
      default: "portion"
    },
    // 默认值
    defaultMonth: {
      type: Date,
      default() {
        const year = new Date().getFullYear(); // 当月年份
        const month = new Date().getMonth() + 1; // 当月月份
        console.log("当前时间" + month, year);
        return new Date(year, month - 1, 1);
      }
    }
  },
  computed: {
    nextMonth() {
      if (this.month == 12) {
        return 1;
      } else {
        return this.month + 1;
      }
    },
    preMonth() {
      if (this.month == 1) {
        return 12;
      } else {
        return this.month - 1;
      }
    },
    nowDay() {
      const newDate = new Date();
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate();
      const isAnd = window.navigator.userAgent
        .toLowerCase()
        .includes("android");
      const sp = isAnd ? "-" : "/";
      return year + sp + month + sp + day;
    }
  },
  watch: {
    defaultMonth() {
      this.setDefaultValue(this.activeData.date);
      this.getCalendarDay();
    }
  },
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      weekArr: ["日", "一", "二", "三", "四", "五", "六"],
      calendarData: [],
      activeData: null
    };
  },
  created() {
    this.getCalendarDay();
  },
  mounted() {
    setTimeout(() => {
      this.setDefaultValue(this.nowDay);
    }, 500);
  },
  methods: {
    //切换月份
    changMonth(type) {
      if (type == "add") {
        if (this.month == 12) {
          this.month = 1;
          this.year = this.year + 1;
        } else {
          this.month = this.month + 1;
        }
      } else {
        if (this.month == 1) {
          this.month = 12;
          this.year = this.year - 1;
        } else {
          this.month = this.month - 1;
        }
      }
      this.getCalendarDay();
      setTimeout(() => {
        this.setDefaultValue(this.nowDay);
      }, 100);
    },
    // 获取日历天数
    getCalendarDay() {
      const year = new Date(this.year, this.month, 0).getFullYear(); // 当月年份
      const month = new Date(this.year, this.month, 0).getMonth() + 1; // 当月月份
      const days = new Date(year, month, 0).getDate(); // 当月天数

      const prevYear = month === 1 ? year - 1 : year; // 上一年年份
      const prevMonth = month === 1 ? 12 : month - 1; // 上月月份
      const prevDays = new Date(prevYear, prevMonth, 0).getDate(); // 上一月天数

      const lastYear = month === 12 ? year + 1 : year; // 下一年年份
      const lastMonth = month === 12 ? 1 : month + 1; // 下月月份
      // let lastDays = new Date(lastYear, lastMonth, 0).getDate() // 下一月天数

      const prevMonthArr = []; // 上月数据
      const nextMonthArr = []; // 下月数据
      const currentMonthArr = []; // 当月数据
      // 判断当月1号是星期几
      const firstDay = new Date(year, month - 1, 1).getDay();
      // 获取显示上月的数据
      for (let i = 0; i < firstDay; i++) {
        const day = prevDays - firstDay + (i + 1);
        const day2 = day >= 10 ? day : "0" + day;
        const month2 = prevMonth >= 10 ? prevMonth : "0" + prevMonth;
        prevMonthArr.push({
          year: prevYear,
          month: prevMonth,
          month2: month2,
          day: day,
          day2: day2,
          date: `${prevYear}-${prevMonth}-${day}`,
          date2: `${prevYear}-${month2}-${day2}`,
          include: false
        });
      }
      // 获取显示的下一月的数据
      for (let i = 0; i < Math.abs((42 - firstDay - days) % 7); i++) {
        const day = i + 1;
        const day2 = day >= 10 ? day : "0" + day;
        const month2 = lastMonth >= 10 ? lastMonth : "0" + lastMonth;
        nextMonthArr.push({
          year: lastYear,
          month: lastMonth,
          month2: month2,
          day: day,
          day2: day2,
          date: `${lastYear}-${lastMonth}-${day}`,
          date2: `${lastYear}-${month2}-${day2}`,
          include: false
        });
      }
      // 获取当月显示数据
      for (let i = 1; i <= days; i++) {
        const day2 = i >= 10 ? i : "0" + i;
        const month2 = month >= 10 ? month : "0" + month;
        currentMonthArr.push({
          year: year,
          month: month,
          month2: month2,
          day: i,
          day2: day2,
          date: `${year}-${month}-${i}`,
          date2: `${year}-${month2}-${day2}`,
          include: true
        });
      }
      this.calendarData = [
        ...prevMonthArr,
        ...currentMonthArr,
        ...nextMonthArr
      ];
    },
    // 设置默认值
    setDefaultValue(date) {
      if (!date) {
        this.activeData = null;
        return;
      }
      const year = new Date(date).getFullYear(); // 当月年份
      const month = new Date(date).getMonth() + 1; // 当月月份
      const month2 = month >= 10 ? month : "0" + month;
      const day = new Date(date).getDate();
      const day2 = day >= 10 ? day : "0" + day;
      const row = {
        year: year,
        month: month,
        month2: month2,
        day: day,
        day2: day2,
        date: `${year}-${month}-${day}`,
        date2: `${year}-${month2}-${day2}`,
        include: true
      };

      this.clickDay(row);
    },
    clickDay(row) {
      if (this.type === "portion" && !row.include) {
        console.log("提示", "只能选择当前月份的日期");
        return;
      }
      this.activeData = { ...row };
      this.$emit("click", { ...row }); //选择日期获取数据
    }
  }
};
</script>

<style lang="scss" scoped>
.ctitle {
  height: 1.2rem;
  background-color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  .mtxt {
    flex: 1;
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222;
    text-align: center;
    span {
      font-size: 0.4rem;
      font-weight: 600;
    }
  }
  .btn {
    width: 1rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.28rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #999999;
  }
}
.calendar-box {
  .week-box {
    width: 7.5rem;
    height: 0.66rem;
    background: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0.28rem;

    .day-header {
      width: 1rem;
      height: 0.6rem;
      font-size: 0.28rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: #999999;
      text-align: center;
      line-height: 0.6rem;
    }
  }

  .calendar-table {
    width: 7.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0.28rem;

    .dbox {
      width: 0.99rem;
      height: 0.9rem;
      text-align: center;
      padding-top: 0.15rem;
      .day {
        width: 0.64rem;
        height: 0.64rem;
        margin: 0 auto;
        text-align: center;
        font-size: 0.28rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #dfdfdf;
        line-height: 0.64rem;
      }
    }

    .include {
      .day {
        color: #222222;
      }
      .nday {
        color: #5cb0f7;
      }
    }

    .active {
      .day {
        background: #5cb0f7;
        color: #fefefe;
        font-size: 0.26rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
