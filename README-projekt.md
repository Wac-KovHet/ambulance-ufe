## WAC 2024 - Projekt (Hetteš, Kovalčík)

### Zadanie

Manažment zamestnancov v rámci jednotlivých ambulanciách

### UC 1

Ako nemocnica si môžem vytvoriť (CREATE) ambulanciu , upraviť jej údaje (UPDATE), Ako nemocnica vidím zoznam ambulancii a viem si pozrieť detail ambulancie (READ). Ambulanciu viem zmazať (DELETE)

### UC 2

V rámci každej ambulancie si viem vytvoriť zamestnanca (CREATE), viem ho upraviť (UPDATE). V rámci ambulancie následne vidím zamestnancov s ich údajmi, platmy (READ) . Zamestnanca viem zmazať (DELETE)

## Tím

- **Samuel Hetteš** - [xhettes]
- **Ctibor Kovalčík** - [xkovalcik]

## Názov aplikácie na spoločnom klastri

**xkovhet - Manažment Ambulancií**

## Linka na GitHub

[Link to GitHub](https://github.com/orgs/Wac-KovHet/repositories)

## Linka na DockerHub

[Link to DockerHub](httpshub.com/orgs/Wac-KovHet)

## Názov deployment objektu pre UI

**xkovhet-ambulance-ufe-deployment**

## Názov deployment objektu pre WEBAPI

**xkovhet-ambulance-ufe**

## Stručný popis

### Frontend

V rámci frontendu je možné vytvárať, upravovať, mazať ambulancie a zamestnancov. Celá Funkcionalita je implementovaná naprieč 6timi webcomponentami.

- **wl-app** - hlavný komponent, ktorý obsahuje navigáciu a router-view

- **wl-editor** - komponent, ktorý obsahuje formulár pre vytváranie a úpravu ambulancií

- **wl-list** - komponent, ktorý zobrazuje zoznam ambulancií

- **wl-employee-editor** - komponent, ktorý obsahuje formulár pre vytváranie a úpravu zamestnancov

- **wl-employee-list** - komponent, ktorý zobrazuje zoznam zamestnancov

- **navigation** - komponent , ktorý obsahuj znovupoužitelný navbar pre všetky komponenty.

### Backend

V rámci backendu je implementované API pre správu ambulancií a zamestnancov. API poskytuje endpointy pre vytváranie, úpravu, mazanie a získavanie údajov o ambulanciách a zamestnancoch. Komunikácia s databázou je zabezpečená pomocou ORM frameworku.

WEB API funguje spôsobom request, response, pričom sú na pozadí zadefinované konkrétne databázové modely (Ambulance a Employee, ktoré sú ukladané ako jeden dokument, teda jedna ambulancia má pod sebou x-zamestnancov).

Dodatočnou funkcionalitou je spravená validácia na prichádzajúce requesty prostredníctvom balíka: "github.com/go-playground/validator/v10". Validácie sú zadefinované priamo v modeloch requestov.

## Link na Azure

[Link to Azure](https://xkovhet-ambulance.azurewebsites.net/)
