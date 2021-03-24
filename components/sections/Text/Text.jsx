import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import cx from "classnames";

import Block from "@/components/containers/Block";

import styles from "./Text.module.scss";

export default function Text({ heading, text }) {
	return (
		<Block heading={heading} className={"text"}>
			{text === "table-price" ?
				<div className={cx("container", styles.markdown)}>
					<TablePrice />
				</div> :
				<div className={cx("container", styles.markdown)}>
					{
						!!text && (
							<ReactMarkdown allowDangerousHtml>
								{text}
							</ReactMarkdown>
						)
					}
				</div>
			}
		</Block>
	);
}

Text.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	text: PropTypes.string,
};

function TablePrice() {
	return (
		<table className="w-full table-fixed border border-green-800 text-center text-lg">

			<tbody>
				<tr>
					<td className={"border w-1/2 p-5"} rowSpan={2}>Наименование работы</td>
					<td className={"border p-5"} colSpan={2}>Грузоподъмность до 4 тн. (включительно)</td>
					<td className={"border p-5"} colSpan={2}>Грузоподъемность от 4 тн. до 6 тн. (включительно)</td>
				</tr>
				<tr>
					<td className={"border p-5"}>Норма времени,  час</td>
					<td className={"border p-5"}>Себестоимость работ, руб</td>
					<td className={"border p-5"}>Норма времени, час</td>
					<td className={"border p-5"}>Себестоимость работ, руб</td>
				</tr>
				<tr>
					<td className={"border p-3"} colSpan={5}>из рассчета 1500 руб/ час</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>ДВС</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Диагностика ДВС</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж ДВС</td>
					<td className={"border"}>10</td>
					<td className={"border"}>15000</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Разборка, мойка и дефектовка ДВС</td>
					<td className={"border"}>20</td>
					<td className={"border"}>30000</td>
					<td className={"border"}>24</td>
					<td className={"border"}>36000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Сборка ДВС</td>
					<td className={"border"}>36</td>
					<td className={"border"}>54000</td>
					<td className={"border"}>42</td>
					<td className={"border"}>63000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж ДВС</td>
					<td className={"border"}>10</td>
					<td className={"border"}>15000</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж радиатора</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж радиатора</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж, диагностика, настройка и монтаж топливной аппаратуры (Евро 2)</td>
					<td className={"border"}>12</td>
					<td className={"border"}>1800</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена маслоохладителя</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>ГТР (неспаренный с КПП)</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Диагностика ГТР</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж  ГТР</td>
					<td className={"border"}>10</td>
					<td className={"border"}>15000</td>
					<td className={"border"}>14</td>
					<td className={"border"}>21000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Разборка, мойка и дефектовка ГТР</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Сборка ГТР</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж ГТР</td>
					<td className={"border"}>10</td>
					<td className={"border"}>15000</td>
					<td className={"border"}>14</td>
					<td className={"border"}>21000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена клапанов ГТР</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>ГТР (неспаренный с КПП)</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Диагностика КПП, ГТР</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж КПП, ГТР</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Разборка, мойка и дефектовка КПП,ГТР</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
					<td className={"border"}>14</td>
					<td className={"border"}>21000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Сборка КПП,ГТР</td>
					<td className={"border"}>22</td>
					<td className={"border"}>33000</td>
					<td className={"border"}>24</td>
					<td className={"border"}>36000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж КПП,ГТР</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж насосов управления</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>7</td>
					<td className={"border"}>10500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж насосов управления</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>7</td>
					<td className={"border"}>10500</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>КПП (спаренная  с ГТР)</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Диагностика КПП, ГТР</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж КПП, ГТР</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Разборка, мойка и дефектовка КПП,ГТР</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
					<td className={"border"}>14</td>
					<td className={"border"}>21000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Сборка КПП,ГТР</td>
					<td className={"border"}>22</td>
					<td className={"border"}>33000</td>
					<td className={"border"}>24</td>
					<td className={"border"}>36000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж КПП,ГТР</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж насосов управления</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>7</td>
					<td className={"border"}>10500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж насосов управления</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>7</td>
					<td className={"border"}>10500</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>КПП (неспаренная с ГТР)</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Диагностика КПП</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж КПП</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Разборка, мойка и дефектовка КПП</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
					<td className={"border"}>14</td>
					<td className={"border"}>21000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Сборка КПП</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
					<td className={"border"}>18</td>
					<td className={"border"}>27000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж КПП</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж насосов управления</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж насосов управления</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>Гидросистема и рулевое управление</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Диагностика</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж гидробака</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж, разборка, мойка и дефектовка  распределителя  управления гидросистемы</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Разборка, мойка и дефектовка насосов управления</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Сборка насосов управления</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж гидробака</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж распределителей</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена гидроцилиндра управления (стреловой, ковшевой) 1 шт.</td>
					<td className={"border"}>1.5</td>
					<td className={"border"}>2250</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена насос-дозатора управления рулевой системы</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Ремонт гидроцилиндра (стреловой, ковшевой)</td>
					<td className={"border"}>7</td>
					<td className={"border"}>10500</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена рулевого гидроцилиндра</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
					<td className={"border"}>1.5</td>
					<td className={"border"}>2250</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Ремонт рулевого  гидроцилиндра</td>
					<td className={"border"}>5</td>
					<td className={"border"}>7500</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена РВД (1шт)</td>
					<td className={"border"}>0.5</td>
					<td className={"border"}>750</td>
					<td className={"border"}>0.5</td>
					<td className={"border"}>750</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>Тормозная система и пневмосистема</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Диагностика тормозной системы</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена суппорта (1шт.)</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена торм. колодок (1шт.)</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена (регулировка) стояночного тормоза</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Удаление воздуза из торм. системы</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>5</td>
					<td className={"border"}>7500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена клапана сброса воздуха</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
					<td className={"border"}>1.5</td>
					<td className={"border"}>2250</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Проверка на герметичность пневмосистемы</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена компрессора</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>Ходовая часть</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена колеса в сборе</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена моста в сборе</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Разборка, мойка и дефектовка бортового редуктора</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
					<td className={"border"}>5</td>
					<td className={"border"}>7500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена (ремонт) главной передачи</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Сборка бортового редуктора</td>
					<td className={"border"}>5</td>
					<td className={"border"}>7500</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж карданного вала</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж карданного вала</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена крестовины (1 шт)</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>Электрооборудование</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Диагностика электрообоудования</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена жгутов электропроводки</td>
					<td className={"border"}>20</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>24</td>
					<td className={"border"}>36000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена генератора/стартера</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена прибора/датчика</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
					<td className={"border"}>1</td>
					<td className={"border"}>1500</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена фар</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
					<td className={"border"}>3</td>
					<td className={"border"}>4500</td>
				</tr>
				<tr>
					<td className={"border p-3 font-bold"} colSpan={5}>Прочее</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена втулок и пальцев сочленения рамы</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
					<td className={"border"}>20</td>
					<td className={"border"}>30000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Замена пальцев и втулок оборудования</td>
					<td className={"border"}>12</td>
					<td className={"border"}>18000</td>
					<td className={"border"}>16</td>
					<td className={"border"}>24000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж кабины</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Монтаж кабины</td>
					<td className={"border"}>4</td>
					<td className={"border"}>6000</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Демонтаж/монтаж ковша</td>
					<td className={"border"}>1.5</td>
					<td className={"border"}>2250</td>
					<td className={"border"}>2</td>
					<td className={"border"}>3000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Установка сепаратора</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
					<td className={"border"}>6</td>
					<td className={"border"}>9000</td>
				</tr>
				<tr>
					<td className={"border p-4"}>Установка электрического подогревателя</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
					<td className={"border"}>8</td>
					<td className={"border"}>12000</td>
				</tr>
			</tbody>
		</table>

	);
}
