import robot from "../images/you robot.jpg";
import frontier from "../images/frontier.jpg";
import conspiracy from "../images/conspiracy.jpg";
import forest from "../images/forest.jpg";
import { type } from "@testing-library/user-event/dist/type";

export const gameCards = {
  ru: [
    {
      title: "Ты, робот",
      text: "На борту космического корабля произошло убийство! Среди вас находится сломанный андроид, не подчиняющийся законам робототехники. Найдите его и раскройте преступление!",
      image: robot,
      repeat: false,
    },
    {
      title: "Убийство на фронтире",
      text: "Маленький городок посреди прерии. Таинственная незнакомка и необъяснимая смерть. Слухи расползаются быстро. В Ред-Ривере все как семья, и эта семья вот-вот будет расколота. ",
      image: frontier,
      repeat: false,
    },
    {
      title: "Конспираториум",
      text: "Все самые безумные теории заговора оказались правдой! Столкнитесь в схватке с рептилоидами и инопланетянами, чтобы навсегда решить, кто будет править земным диском.",
      image: conspiracy,
      repeat: true,
    },
    {
      title: "Дети Леса",
      text: "Кто это танцует на лесной поляне? Человек или зверь сейчас скрылся за деревом? Они зовут себя Детьми Леса. Что скрывают звериные маски: дружную семью или опасный культ? Скоро тайна Детей Леса будет раскрыта.",
      image: forest,
      repeat: true,
    },
  ]
};

export const nearestGames = [
  {
    isDnd: false,
    index: 3,
    date: "10/10/24",
    city: {
      ru: "Тель-Авив",
    }
  },
  {
    isDnd: false,
    index: 0,
    date: "21/10/24",
    city: {
      ru: "Иерусалим",
    }
  },
]