# Playwright + TypeScript — API Automation

API test automation project for [Restful Booker](https://restful-booker.herokuapp.com) using Playwright's `APIRequestContext` with TypeScript, a custom API Client pattern, and custom fixtures.

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Playwright](https://img.shields.io/badge/Playwright-latest-green)
![CI](https://github.com/SofiMeriggi2/playwright-typescript---backend/actions/workflows/tests.yml/badge.svg)

---

## Tech Stack

- **TypeScript 5.x**
- **Playwright APIRequestContext** — HTTP client for API testing
- **Playwright Test** — test runner
- **GitHub Actions** — CI/CD

---

## Project Structure

```
playwright-typescript---backend/
├── clients/
│   └── BookingClient.ts      # Encapsulates all API endpoints
├── data/
│   ├── payloads.ts            # Request bodies (as const)
│   └── messages.ts            # Expected error messages (as const)
├── tests/
│   ├── fixtures.ts            # Custom fixtures: client, authToken, createdBookingId
│   ├── auth.spec.ts           # TC-01 to TC-02
│   ├── booking-get.spec.ts    # TC-03 to TC-05
│   ├── booking-post.spec.ts   # TC-06 to TC-07
│   └── booking-put-patch-delete.spec.ts  # TC-08 to TC-10
├── .github/
│   └── workflows/
│       └── tests.yml          # CI/CD pipeline
├── playwright.config.ts       # Playwright config with default headers
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

---

## Test Cases

| ID | Method | Description |
|---|---|---|
| TC-01 | POST | Successful auth returns valid token |
| TC-02 | POST | Invalid credentials return error message |
| TC-03 | GET | Get all bookings returns a list |
| TC-04 | GET | Get booking by ID returns correct data |
| TC-05 | GET | Non-existent booking ID returns 404 |
| TC-06 | POST | Create booking returns bookingid and data |
| TC-07 | POST | Create without required fields returns error |
| TC-08 | PUT | Full update modifies all fields correctly |
| TC-09 | PATCH | Partial update modifies only sent fields |
| TC-10 | DELETE | Delete booking returns 201 and booking is gone |

---

## Key Design Decisions

**API Client pattern** — `BookingClient` encapsulates all endpoint calls. Tests never build raw requests directly, keeping them focused on assertions only.

**Custom fixtures** — `fixtures.ts` extends Playwright's base `test` with three fixtures: `client` (BookingClient instance), `authToken` (session-scoped token), and `createdBookingId` (booking lifecycle with automatic teardown).

**Automatic teardown** — `createdBookingId` creates a booking before each test and deletes it after via `use()`. Tests run in full isolation with no shared state.

---

## Installation

```bash
git clone https://github.com/SofiMeriggi2/playwright-typescript---backend.git
cd playwright-typescript---backend

npm install
npx playwright install chromium
```

---

## Running Tests

```bash
# All tests
npx playwright test

# Single spec
npx playwright test tests/auth.spec.ts

# UI mode
npx playwright test --ui
```

---

## Part of an Automation Portfolio

| # | Stack | Type |
|---|---|---|
| 1 | Playwright + Python | Frontend |
| 2 | Playwright + Python | API/Backend |
| 3 | Playwright + TypeScript | Frontend |
| 4 | Playwright + TypeScript | API/Backend ← this one |
| 5 | Selenium | Mobile |