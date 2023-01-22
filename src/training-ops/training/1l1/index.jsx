import "./training.scss";
import React, { useState } from "react";
import schema from "../../Img/schema1.png";
import cx from "classnames";

import strelaSVG from "../../Img/strela.svg";

import ZvukIzv from "../../Img/training/звуковойОповещатель.png";
import SvetOpov from "../../Img/training/световойОповещатель.png";
import DimovoyToch from "../../Img/training/извещательДымовойТочечный.png";
import izvRuchn from "../../Img/training/извещательРучной.png";
import MMenu from "../MMenu";
import net from "../../../sound/net.mp3";
import da from "../../../sound/da.mp3";

import { Howl } from "howler";

function Training() {
  function soundPlay(src) {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  }
  const audioClips = [
    {
      sound: net,
      label: "нет",
    },
    { sound: da, label: "да" },
  ];

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const [isCheck, setIsCheck] = useState(false);
  const [isRotate, setIsRotate] = useState(false);

  const [boards, setBoard] = useState([
    {
      id: 1,
      title:
        "Подсоедините в правильной последовательности приборы пожарной сигнализации в помещениях ",
      color: "green",
      items: [
        {
          id: [2],
          body: <img className="imgIcon" src={ZvukIzv} alt="" />,
          title: "2",
        },
        {
          id: [3, 11],
          body: <img className="imgIcon" src={izvRuchn} alt="" />,
          title: "3",
        },
        {
          id: [12, 4],
          body: <img className="imgIcon" src={SvetOpov} alt="" />,
          title: "4",
        },
        {
          id: [5, 6, 7, 8, 9, 10],
          body: <img className="imgIcon" src={DimovoyToch} alt="" />,
          title: "5",
        },
        {
          id: [5, 6, 7, 8, 9, 10],
          body: <img className="imgIcon" src={DimovoyToch} alt="" />,
          title: "6",
        },
        {
          id: [5, 6, 7, 8, 9, 10],
          body: <img className="imgIcon" src={DimovoyToch} alt="" />,
          title: "7",
        },
        {
          id: [5, 6, 7, 8, 9, 10],
          body: <img className="imgIcon" src={DimovoyToch} alt="" />,
          title: "8",
        },
        {
          id: [5, 6, 7, 8, 9, 10],
          body: <img className="imgIcon" src={DimovoyToch} alt="" />,
          title: "9",
        },
        {
          id: [5, 6, 7, 8, 9, 10],
          body: <img className="imgIcon" src={DimovoyToch} alt="" />,
          title: "10",
        },
        {
          id: [11, 3],
          body: <img className="imgIcon" src={izvRuchn} alt="" />,
          title: "11",
        },
        {
          id: [12, 4],
          body: <img className="imgIcon" src={SvetOpov} alt="" />,
          title: "12",
        },
      ],
      color: null,
    },
    {
      id: 2,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 3,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 4,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 5,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 6,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 7,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 8,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 9,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 10,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 11,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
    {
      id: 12,
      title: <img src={strelaSVG} alt="" className="strelka" />,

      items: [],
      color: null,
    },
  ]);
  const iBoard = [
    {
      id: 1,
      title: "Расставьте  ",
      items: [],
      color: "green",
    },
    {
      id: [2],
      title: "2",
      items: [{ id: [2], title: "2" }],
    },
    {
      id: [3, 11],
      title: "3",
      items: [{ id: [3, 11], title: "3" }],
    },

    {
      id: [12, 4],
      title: "4",
      items: [{ id: [12, 4], title: "4" }],
    },
    {
      id: [5, 6, 7, 8, 9, 10],
      title: "5",
      items: [{ id: [5, 6, 7, 8, 9, 10], title: "5" }],
    },
    {
      id: [5, 6, 7, 8, 9, 10],
      title: "6",
      items: [{ id: [5, 6, 7, 8, 9, 10], title: "6" }],
    },
    {
      id: [5, 6, 7, 8, 9, 10],
      title: "7",
      items: [{ id: [5, 6, 7, 8, 9, 10], title: "7" }],
    },
    {
      id: [5, 6, 7, 8, 9, 10],
      title: "8",
      items: [{ id: [5, 6, 7, 8, 9, 10], title: "8" }],
    },
    {
      id: [5, 6, 7, 8, 9, 10],
      title: "9",
      items: [{ id: [5, 6, 7, 8, 9, 10], title: "9" }],
    },
    {
      id: [5, 6, 7, 8, 9, 10],
      title: "10",
      items: [{ id: [5, 6, 7, 8, 9, 10], title: "10" }],
    },
    {
      id: [11, 3],
      title: "11",
      items: [{ id: [11, 3], title: "11" }],
    },
    {
      id: [12, 4],
      title: "12",
      items: [{ id: [12, 4], title: "12" }],
    },
  ];

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === "item") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  }
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentBoard);
    setBoard(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoard(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }
  const checkCode = () => {
    setIsCheck(!isCheck);
    setIsRotate(!isRotate);

    for (let i = 1; i <= 12; i++) {
      const arr1 = boards[i]?.items[0]?.id;
      const arr2 = iBoard[i]?.items[0]?.id;

      if (Array.isArray(arr1) && Array.isArray(arr2)) {
        let a = new Set(arr1);
        let b = new Set(arr2);
        var equal = isEqual(a, b);

        function isEqual(a, b) {
          const a1 = setToArray(a),
            a2 = setToArray(b);
          return (
            a1.length === a2.length &&
            a1.every(function (v, i) {
              return v === a2[i];
            })
          );
        }

        function setToArray(setInstance) {
          return Array.from(setInstance).sort((a, b) => b - a);
        }
      }
      if (Array.isArray(arr1) && Array.isArray(arr2)) {
        equal ? (boards[i].color = "green") : (boards[i].color = "red");
      }

      if (boards[i].color === "green") {
        console.log("верно");
        soundPlay(audioClips[1].sound);
      } else {
        console.log("не верно");
        soundPlay(audioClips[0].sound);
      }
    }
  };

  return (
    <div className="dnd">
      {boards.map((board, i) => (
        <div className={cx("absolute board board") + i + " " + boards[i].color}>
          <div
            className={cx(
              "board__title",
              i === 0 ? "board__title__main" : null
            )}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
          >
            {board.title}
          </div>
          {board.items.map((item, i) => (
            <div
              key={i}
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              draggable={true}
              className={cx(
                "item",
                isCheck ? item.color : null,
                isRotate ? "rotate-center" : null
              )}
            >
              {item.body}
            </div>
          ))}
        </div>
      ))}
      <button onClick={checkCode} className="absolute MyButton">
        Проверка
      </button>
      <MMenu />
      <img src={schema} className="boardImg absolute" alt="" />
    </div>
  );
}

export default Training;
