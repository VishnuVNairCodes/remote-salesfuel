import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import "./Article.css";

function Article() {
  const cards = [
    {
      imgUrl: "https://picsum.photos/id/1/200/300",
      badge: "draft",
      title: "web design",
      date: "12/05/2022",
      lesson: "2",
      minutes: "14",
      categories: "marketing",
    },
    {
      imgUrl: "https://picsum.photos/id/10/200/300",
      badge: "live",
      title: "sales vs marketing",
      date: "04/08/2022",
      lesson: "3",
      minutes: "25",
      categories: "sales,marketing",
    },
    {
      imgUrl: "https://picsum.photos/id/100/200/300",
      badge: "archived",
      title: "how to unclog a sink",
      date: "05/08/2022",
      lesson: "6",
      minutes: "15",
      categories: "sales",
    },
    {
      imgUrl: "https://picsum.photos/id/1000/200/300",
      badge: "draft",
      title: "how google analytics ruinded marketing",
      date: "07/05/2022",
      lesson: "3",
      minutes: "34",
      categories: "sales",
    },
    {
      imgUrl: "https://picsum.photos/id/1001/200/300",
      badge: "draft",
      title: "social media marketing 101",
      date: "19/05/2022",
      lesson: "9",
      minutes: "124",
      categories: "sales,marketing",
    },
    {
      imgUrl: "https://picsum.photos/id/1002/200/300",
      badge: "draft",
      title: "compliance training",
      date: "24/08/2021",
      lesson: "2",
      minutes: "15",
      categories: "training,upskilling",
    },
    {
      imgUrl: "https://picsum.photos/id/1003/200/300",
      badge: "archived",
      title: "top tricks to bargaining",
      date: "07/07/2022",
      lesson: "6",
      minutes: "84",
      categories: "sales,negotiation",
    },
    {
      imgUrl: "https://picsum.photos/id/1005/200/300",
      badge: "archived",
      title: "3 copyrighting hacks you should know",
      date: "02/05/2022",
      lesson: "2",
      minutes: "45",
      categories: "copywriting,marketing",
    },
    {
      imgUrl: "https://picsum.photos/id/1006/200/300",
      badge: "draft",
      title: "learn react in 1 minute",
      date: "22/09/2021",
      lesson: "1",
      minutes: "1",
      categories: "sales,marketing",
    },
    {
      imgUrl: "https://picsum.photos/id/1019/200/300",
      badge: "live",
      title: "public speaking masterclass",
      date: "12/08/2020",
      lesson: "7",
      minutes: "140",
      categories: "training,upskilling",
    },
    {
      imgUrl: "https://picsum.photos/id/1020/200/300",
      badge: "draft",
      title: "take charge of your time",
      date: "31/01`/2022",
      lesson: "5",
      minutes: "85",
      categories: "productivity",
    },
    {
      imgUrl: "https://picsum.photos/id/1009/200/300",
      badge: "archived",
      title: "pyjama profit",
      date: "14/05/2022",
      lesson: "7",
      minutes: "77",
      categories: "freelancing",
    },
    {
      imgUrl: "https://picsum.photos/id/1010/200/300",
      badge: "draft",
      title: "everything about metaverse",
      date: "22/05/2022",
      lesson: "2",
      minutes: "120",
      categories: "upskilling",
    },
    {
      imgUrl: "https://picsum.photos/id/1011/200/300",
      badge: "live",
      title: "web flow: 0 to hero",
      date: "12/05/2022",
      lesson: "9",
      minutes: "153",
      categories: "training,upskilling",
    },
    {
      imgUrl: "https://picsum.photos/id/1012/200/300",
      badge: "archived",
      title: "digital marketing masterclass",
      date: "11/01/2022",
      lesson: "2",
      minutes: "140",
      categories: "sales,marketing",
    },
    {
      imgUrl: "https://picsum.photos/id/1013/200/300",
      badge: "draft",
      title: "5 books you must read",
      date: "12/09/2022",
      lesson: "5",
      minutes: "51",
      categories: "sales,marketing",
    },
    {
      imgUrl: "https://picsum.photos/id/1014/200/300",
      badge: "live",
      title: "learn video editing in 30 days",
      date: "12/11/2022",
      lesson: "30",
      minutes: "600",
      categories: "upskilling",
    },
    {
      imgUrl: "https://picsum.photos/id/1015/200/300",
      badge: "archived",
      title: "learn the art of photography",
      date: "12/05/2022",
      lesson: "2",
      minutes: "289",
      categories: "training,upskilling",
    },
    {
      imgUrl: "https://picsum.photos/id/1016/200/300",
      badge: "draft",
      title: "5 tips to become a marketing superstar",
      date: "30/06/2021",
      lesson: "2",
      minutes: "74",
      categories: "sales,marketing",
    },
    {
      imgUrl: "https://picsum.photos/id/1018/200/300",
      badge: "live",
      title: "5 things you should know to become a superstar storyteller",
      date: "12/05/2022",
      lesson: "6",
      minutes: "54",
      categories: "sales,marketing",
    },
  ];

  const liveCards = cards.filter((card) => card.badge === "live");
  const draftCards = cards.filter((card) => card.badge === "draft");
  const archivedCards = cards.filter((card) => card.badge === "archived");

  const [cardList, setCardList] = useState(cards);
  const [activeBtn, setActiveBtn] = useState("all");

  const getTextDecor = (btnName) =>
    btnName === activeBtn ? "tab-btn-underline" : "";

  const allBtnHandler = () => {
    setActiveBtn("all");
    return setCardList(cards);
  };
  const liveBtnHandler = () => {
    setActiveBtn("live");
    return setCardList(liveCards);
  };
  const draftBtnHandler = () => {
    setActiveBtn("draft");
    return setCardList(draftCards);
  };
  const archivedBtnHandler = () => {
    setActiveBtn("archived");
    setCardList(archivedCards);
  };

  return (
    <>
      <article className="article">
        <NavBar />
        <div className="article-content">
          <div className="tab">
            <div className="tab-btn-group">
              <button
                className={`tab-btn ${getTextDecor("all")}`}
                onClick={allBtnHandler}
              >
                All
              </button>
              <button
                className={`tab-btn ${getTextDecor("live")}`}
                onClick={liveBtnHandler}
              >
                Live
              </button>
              <button
                className={`tab-btn ${getTextDecor("draft")}`}
                onClick={draftBtnHandler}
              >
                Draft
              </button>
              <button
                className={`tab-btn ${getTextDecor("archived")}`}
                onClick={archivedBtnHandler}
              >
                Archived
              </button>
            </div>
            <select defaultValue="" name="teams" className="tab-dropdown">
              <option value="" disabled>
                Select team{" "}
              </option>
              <option value="team-1">Team 1</option>
              <option value="team-2">Team 2</option>
              <option value="team-3">Team 3</option>
              <option value="team-4">Team 4</option>
            </select>
          </div>
          <div className="article-card-list">
            {cardList.map(
              ({ imgUrl, badge, title, date, lesson, minutes, categories }) => (
                <Card
                  key={uuid()}
                  imgUrl={imgUrl}
                  badge={badge}
                  title={title}
                  date={date}
                  lesson={lesson}
                  minutes={minutes}
                  categories={categories}
                />
              )
            )}
          </div>
        </div>
      </article>
    </>
  );
}

export default Article;
