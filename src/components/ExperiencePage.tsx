
import React, {FunctionComponent} from 'react'
import styles from '@/styles/Experience.module.scss'
import Head from 'next/head'

export default () => {
  return <>
    <Head>
      <title>experience</title>
    </Head>
    <div className={styles.experience}>
      <div className={styles.item + ' ' + styles.workHistoryItem}>Экспириенс</div>
      <div className={styles.item}>
        <div className={styles.position}>Frontend Developer (React) at AUTOCLAD</div>
        <div className={styles.duration}>Kyiv (Ukraine) / <b>1.2 years</b></div>
        <div className={styles.resp}>
          <ul>
            <li>Разработка SPA личного кабинета пользователя</li>
            <li>Взаимодействие с Backend-разработчиками</li>
            <li>Исправление багов</li>
            <li>Доработка функционала в существующей кодовой базе</li>
          </ul>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.position}>Frontend Developer (React) at ALTINET</div>
        <div className={styles.duration}>Kyiv (Ukraine) / <b>1.2 years</b></div>
        <div className={styles.resp}>
          <div>Параллельно работал в двух проектах.</div>
          <ul>
            <li>В рамках первого:</li>
            <li>Разрабатывал пользовательский интерфейс (UI) личного кабинета</li>
            <li>Взаимодействовал с бекэндом через REST API</li>
            <li>Внедрил state-manager Redux & Thunk middleware</li>
            <li>В рамках второго:</li>
            <li>Поддерживал и дорабатывал существующий код, избавлялся от legacy-кода</li>
            <li>Разрабатывал новую логику на React</li>
            <li>Осуществлял миграцию на TypeScript</li>
          </ul>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.position}>Frontend Developer (Angular1 + React) at Tovarovoz Project (e-commerce)</div>
        <div className={styles.duration}>Kyiv (Ukraine) / <b>1.1 years</b></div>
        <div className={styles.resp}>
          <ul>
            <li>Разработка SPA изначально на Angular 1.x потом на React (система управления/админка интернет-магазина)</li>
            <li>Создание UI-компонентов на React</li>
            <li>Реализация навигации по страницам (React Router)</li>
            <li>Внедрение state-менеджера Redux & Thunk middleware</li>
            <li>Реализация манипуляции данными (CRUD) интернет-магазина через пользовательский интерфейс и REST API</li>
            <li>Реализация поддержки интернационализации (русский, английский, украинский)</li>
            <li>Интеграция со сторонними React-компонентами</li>
            <li>Исправления возникающих багов</li>
          </ul>
        </div>
      </div>
      <div className={styles.item + ' ' + styles.educationItem}>Учебное заведение</div>
      <div className={styles.item}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/%D0%98%D0%90%D0%A2%D0%AD_logo.png' />
        <div>
          <div><a href="https://en.wikipedia.org/wiki/Obninsk_Institute_for_Nuclear_Power_Engineering"><b>ИАТЭ НИЯУ МИФИ</b> (Обнинский институт атомной энергетики НИЯУ МИФИ)</a></div>
          <div>Обнинск, Россия</div>
        </div>
      </div>
    </div>
  </>
}