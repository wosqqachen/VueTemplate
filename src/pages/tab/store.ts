import { reactive } from 'vue';

//tab信息
export const tabInfo = reactive({
  tab: 0,
  tabData: {
    time: {
      datetime: ['2023-12-21 00:00:00', '2023-12-29 24:00:00'],
      range_ts: [1703088000, 1703865600],
      status: 1,
      cd: 0,
    },
    collection: [
      {
        gift_id: '',
        static_icon: '',
        item_name: '',
        dPrice: 0,
        num: 0,
      },
      {
        gift_id: '',
        static_icon: '',
        item_name: '',
        dPrice: 0,
        num: 0,
      },
      {
        gift_id: '',
        static_icon: '',
        item_name: '',
        dPrice: 0,
        num: 0,
      },
    ],
    complete_num: 0,
    daily_reward: {
      today_num: 0,
      require_num: 3,
    },
  } as any,
  geTabData:async (p: string) => {
    // const res = await getInfo({ data: p }) || 0;
    // tabInfo.tabData = res;
  },
  time: '' as any,
});