import { App, Chart } from 'cdk8s';

import * as crossplane from '../../../src';

import * as comp from './crs/composition.apiextensions.crossplane.io';
import * as xrds from './crs/xrd.apiextensions.crossplane.io';
import * as db from './imports/database.aws.crossplane.io';

export function configYaml(crossplanePackage: App): Chart {

  const yaml = new Chart(crossplanePackage, 'crossplane');

  const config = new crossplane.Configuration(yaml, 'platform-ref-aws', {
    name: 'platform-ref-aws',
    company: 'Upbound',
    maintainer: 'Jared Watts <jared@upbound.io>',
    keywords: ['aws', 'cloud-native', 'kubernetes', 'example', 'platform', 'reference'],
    source: 'github.com/upbound/platform-ref-aws',
    license: 'Apache-2.0',
    descriptionShort: 'The AWS reference platform for Kubernetes and Data Services.',
    description: 'This reference platform Configuration for Kubernetes and Data Services is a starting point to build, run, and operate your own internal cloud platform and offer a self-service console and API to your internal teams.',
    readme: 'This reference platform `Configuration` for Kubernetes and Data Services\nis a starting point to build, run, and operate your own internal cloud\nplatform and offer a self-service console and API to your internal teams.\nIt provides platform APIs to provision fully configured EKS clusters,\nwith secure networking, and stateful cloud services (RDS) designed to\nsecurely connect to the nodes in each EKS cluster -- all composed using\ncloud service primitives from the [Crossplane AWS\nProvider](https://doc.crds.dev/github.com/crossplane/provider-aws). App\ndeployments can securely connect to the infrastructure they need using\nsecrets distributed directly to the app namespace.\n\n[Quickstart\nGuide](https://github.com/upbound/platform-ref-aws/#quick-start)\n\n[APIs in this\nConfiguration](https://github.com/upbound/platform-ref-aws/#apis-in-this-configuration)\n\nTo learn more checkout the [GitHub\nrepo](https://github.com/upbound/platform-ref-aws/) that you can copy and\ncustomize to meet the exact needs of your organization!\n',
    crossplaneVersion: '>=v1.0.0-0',
    iconData: 'CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjUiIGhlaWdodD0iNjUiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3Qgd2lkdGg9IjY1IiBoZWlnaHQ9IjY1IiBmaWxsPSIjMjMyRjNFIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHJ4PSIxNiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMy4yNDYzNjU2IDI5Ljk2ODk5N2MwIC41NjQxODQ0LjA1NjQyNDYgMS4wMjE2MzEyLjE1NTE2NzYgMS4zNTcwOTIyLjExMjg0OTIuMzM1NDYxLjI1MzkxMDcuNzAxNDE4NC40NTEzOTY4IDEuMDk3ODcyMy4wNzA1MzA4LjEyMTk4NTguMDk4NzQzMS4yNDM5NzE2LjA5ODc0MzEuMzUwNzA5MiAwIC4xNTI0ODIzLS4wODQ2MzY5LjMwNDk2NDYtLjI2ODAxNjkuNDU3NDQ2OGwtLjg4ODY4NzUuNjQwNDI1NmMtLjEyNjk1NTMuMDkxNDg5My0uMjU0MDUxNy4xMzcyMzQtLjM2Njc1OTkuMTM3MjM0LS4xNDEwNjE1IDAtLjI4MjEyMy0uMDc2MjQxMS0uNDIzMTg0NS0uMjEzNDc1Mi0uMTk3NDg2MS0uMjI4NzIzNC0uMzY2NzU5OS0uNDcyNjk1LS41MDc4MjE0LS43MTY2NjY2LS4xNDEwNjE1LS4yNTkyMTk5LS4yODIxMjMtLjU0ODkzNjItLjQzNzI5MDYtLjg5OTY0NTQtMS4xMDA0MjA3OCAxLjQwMjgzNjgtMi40ODI2ODI0MiAyLjEwNDI1NTMtNC4xNDcyMDgxMyAyLjEwNDI1NTMtMS4xODQ5MTY2MSAwLTIuMTMwMDI4NjYtLjM2NTk1NzUtMi44MjEyMzAwMi0xLjA5Nzg3MjQtLjY5MTIwMTM1LS43MzE5MTQ4LTEuMDQzODU1MS0xLjcwNzgwMTQtMS4wNDM4NTUxLTIuOTI3NjU5NSAwLTEuMjk2MDk5MzIuNDIzMDQzNDQtMi4zNDgyMjY5OCAxLjI4MzY1OTY1LTMuMTQxMTM0NzguODYwNDc1MTYtLjc5MjkwNzggMi4wMDMwNzMzMS0xLjE4OTM2MTcgMy40NTYwMDY3Ny0xLjE4OTM2MTcuNDc5NDY4MDQgMCAuOTczMzI0MzYuMDQ1NzQ0NjggMS40OTUyNTE5MS4xMjE5ODU4MS41MjE5Mjc1NS4wNzYyNDExNCAxLjA1Nzk2MTI2LjE5ODIyNjk1IDEuNjIyMjA3MjYuMzM1NDYxdi0xLjExMzEyMDU3YzAtMS4xNTg4NjUyNS0uMjI1Njk4NC0xLjk2NzAyMTI4LS42NjI5ODkwNS0yLjQzOTcxNjMxLS40NTEzOTY4MS0uNDcyNjk1MDQtMS4yMTMxMjg5MS0uNzAxNDE4NDQtMi4yOTkzMDI0Ny0uNzAxNDE4NDQtLjQ5MzcxNTI1IDAtMS4wMDE1MzY2NS4wNjA5OTI5MS0xLjUyMzQ2NDIuMTk4MjI2OTUtLjUyMTkyNzU2LjEzNzIzNDA0LTEuMDI5NzQ4OTYuMzA0OTY0NTQtMS41MjM0NjQyMS41MTg0Mzk3MS0uMjI1Njk4NC4xMDY3Mzc1OS0uMzk0OTcyMi4xNjc3MzA1LS40OTM3MTUyNi4xOTgyMjY5Ni0uMDk4NzQzMDUuMDMwNDk2NDUtLjE2OTI3MzguMDQ1NzQ0NjgtLjIyNTgzOTQ2LjA0NTc0NDY4LS4xOTczNDUwNCAwLS4yOTYwODgwOS0uMTUyNDgyMjctLjI5NjA4ODA5LS40NzI2OTUwNHYtLjc0NzE2MzEyYzAtLjI0Mzk3MTYzLjAyODIxMjMtLjQyNjk1MDM1LjA5ODc0MzA1LS41MzM2ODc5NHMuMTk3MzQ1MDQtLjIxMzQ3NTE4LjM5NDk3MjItLjMyMDIxMjc3Yy40OTM1NzQyLS4yNzQ0NjgwOCAxLjA4NjE3MzU2LS41MDMxOTE0OSAxLjc3NzM3NDkxLS42ODYxNzAyMS42OTEyMDEzNi0uMTk4MjI2OTUgMS40MjQ3MjExNi0uMjg5NzE2MzEgMi4yMDA1NTk0Mi0uMjg5NzE2MzEgMS42Nzg2MzE4NSAwIDIuOTA1ODY2OTIuNDExNzAyMTIgMy42OTU4MTEzMiAxLjIzNTEwNjM4Ljc3NTgzODIuODIzNDA0MjUgMS4xNzA4MTA1IDIuMDczNzU4ODYgMS4xNzA4MTA1IDMuNzUxMDYzODNWMjkuOTY4OTk3aC4wMjgyMTIzem0tNS43MjcwOTY5OCAyLjMxNzczMDVjLjQ2NTUwMjk1IDAgLjk0NDk3MDk5LS4wOTE0ODk0IDEuNDUyOTMzNDYtLjI3NDQ2ODEuNTA3ODIxNC0uMTgyOTc4OC45NTkyMTgyLS41MTg0Mzk3IDEuMzQwMDg0MjYtLjk3NTg4NjYuMjI1Njk4NC0uMjg5NzE2My4zOTQ4MzExNC0uNjA5OTI5LjQ3OTYwOTEtLjk3NTg4NjUuMDg0NjM2OS0uMzY1OTU3NC4xNDEwNjE1LS44MDgxNTYwMS4xNDEwNjE1LTEuMzI2NTk1NzJ2LS42NDA0MjU1M2MtLjQwOTA3ODM1LS4xMDY3Mzc1OS0uODQ2MzY5MDEtLjE5ODIyNjk1LTEuMjk3NzY1ODEtLjI1OTIxOTg2LS40NTEzOTY4LS4wNjA5OTI5MS0uODg4Njg3NDUtLjA5MTQ4OTM2LTEuMzI1OTc4MS0uMDkxNDg5MzYtLjk0NTExMjA2IDAtMS42MzYzMTM0MS4xOTgyMjY5NS0yLjEwMTgxNjM3LjYwOTkyOTA3LS40NjU1MDI5NS40MTE3MDIxMy0uNjkxMjAxMzUuOTkxMTM0NzYtLjY5MTIwMTM1IDEuNzUzNTQ2MSAwIC43MTY2NjY3LjE2OTI3MzggMS4yNTAzNTQ2LjUyMTkyNzU1IDEuNjE2MzEyMS4zMzg1NDc2MS4zODEyMDU2LjgzMjI2Mjg2LjU2NDE4NDQgMS40ODExNDU3Ni41NjQxODQ0ek0yOC44NDY1MDcxIDMzLjkzMzUzNmMtLjI1MzkxMDcgMC0uNDIzMTg0NS0uMDQ1NzQ0Ny0uNTM2MDMzNy0uMTUyNDgyMy0uMTEyODQ5Mi0uMDkxNDg5NC0uMjExNTkyMi0uMzA0OTY0NS0uMjk2MjI5MS0uNTk0NjgwOUwyNC42OTkyOTkgMjEuMzk5NDkzNDFjLS4wODQ3NzgtLjMwNDk2NDUzLS4xMjY5NTUzLS41MDMxOTE0OC0uMTI2OTU1My0uNjA5OTI5MDcgMC0uMjQzOTcxNjMuMTEyNzA4MS0uMzgxMjA1NjguMzM4NTQ3Ni0uMzgxMjA1NjhoMS4zODI0MDI3Yy4yNjc4NzU4IDAgLjQ1MTM5NjguMDQ1NzQ0NjguNTUwMTM5OC4xNTI0ODIyNy4xMTI4NDkyLjA5MTQ4OTM2LjE5NzQ4NjEuMzA0OTY0NTQuMjgyMTIzLjU5NDY4MDg1TDI5LjQ5NTM5IDMxLjI0OTg0OGwyLjIwMDQxODQtMTAuMDk0MzI2MjJjLjA3MDY3MTgtLjMwNDk2NDU0LjE1NTE2NzYtLjUwMzE5MTQ5LjI2ODE1NzktLjU5NDY4MDg1LjExMjg0OTItLjA5MTQ4OTM2LjMxMDE5NDItLjE1MjQ4MjI3LjU2NDI0Ni0uMTUyNDgyMjdoMS4xMjg0OTJjLjI2Nzg3NTggMCAuNDUxMzk2OC4wNDU3NDQ2OC41NjQyNDYuMTUyNDgyMjcuMTEyODQ5Mi4wOTE0ODkzNi4yMTE1OTIzLjMwNDk2NDU0LjI2ODAxNjkuNTk0NjgwODVsMi4yMjg2MzA2IDEwLjIxNjMxMjAyIDIuNDQwNTA1LTEwLjIxNjMxMjAyYy4wODQ2MzY5LS4zMDQ5NjQ1NC4xODMzOC0uNTAzMTkxNDkuMjgyMTIzLS41OTQ2ODA4NS4xMTI4NDkyLS4wOTE0ODkzNi4yOTYyMjkyLS4xNTI0ODIyNy41NTAxMzk5LS4xNTI0ODIyN2gxLjMxMTg3MTljLjIyNTY5ODQgMCAuMzUyNjUzOC4xMjE5ODU4Mi4zNTI2NTM4LjM4MTIwNTY4IDAgLjA3NjI0MTEzLS4wMTQxMDYyLjE1MjQ4MjI3LS4wMjgyMTIzLjI0Mzk3MTYzLS4wMTQyNDcyLjA5MTQ4OTM2LS4wNDIzMTg1LjIxMzQ3NTE3LS4wOTg3NDMxLjM4MTIwNTY3TDM4LjEyODM1MzkgMzMuMjAxNjIxMWMtLjA4NDc3OC4zMDQ5NjQ1LS4xODM1MjEuNTAzMTkxNS0uMjk2MzcwMi41OTQ2ODA4LS4xMTI3MDgyLjA5MTQ4OTQtLjI5NjA4ODEuMTUyNDgyMy0uNTM1ODkyNy4xNTI0ODIzaC0xLjIxMzI2OTljLS4yNjc4NzU4IDAtLjQ1MTI1NTgtLjA0NTc0NDctLjU2NDI0Ni0uMTUyNDgyMy0uMTEyODQ5Mi0uMTA2NzM3Ni0uMjExNTkyMy0uMzA0OTY0NS0uMjY3ODc1OC0uNjA5OTI5MWwtMi4xODY0NTMzLTkuODM1MTA2MzQtMi4xNzIzNDcxIDkuODE5ODU4MTRjLS4wNzA2NzE4LjMwNDk2NDYtLjE1NTE2NzcuNTAzMTkxNS0uMjY4MDE2OS42MDk5MjkxLS4xMTI4NDkyLjEwNjczNzYtLjMxMDMzNTMuMTUyNDgyMy0uNTY0MjQ2LjE1MjQ4MjNoLTEuMjEzMTI4OXptMTguMTI2NDAyOS40MTE3MDIxYy0uNzMzNTE5OCAwLTEuNDY3MDM5Ni0uMDkxNDg5NC0yLjE3MjM0NzEtLjI3NDQ2ODFzLTEuMjU1NDQ3NC0uMzgxMjA1Ny0xLjYyMjIwNzMtLjYwOTkyOTFjLS4yMjU2OTg0LS4xMzcyMzQtLjM4MTAwNzEtLjI4OTcxNjMtLjQzNzI5MDYtLjQyNjk1MDMtLjA1NjQyNDYtLjEzNzIzNDEtLjA4NDYzNjktLjI4OTcxNjMtLjA4NDYzNjktLjQyNjk1MDR2LS43Nzc2NTk2YzAtLjMyMDIxMjcuMTEyODQ5Mi0uNDcyNjk1LjMyNDQ0MTQtLjQ3MjY5NS4wODQ2MzY5IDAgLjE2OTEzMjcuMDE1MjQ4Mi4yNTM3Njk2LjA0NTc0NDcuMDg0Nzc4LjAzMDQ5NjQuMjExNTkyMy4wOTE0ODk0LjM1Mjc5NDkuMTUyNDgyMy40Nzk0NjguMjI4NzIzNCAxLjAwMTUzNjYuNDExNzAyMSAxLjU1MTUzNTQuNTMzNjg3OS41NjQzODcxLjEyMTk4NTggMS4xMTQzODU5LjE4Mjk3ODcgMS42Nzg3NzI5LjE4Mjk3ODcuODg4Njg3NSAwIDEuNTc5ODg4OC0uMTY3NzMwNSAyLjA1OTM1NjktLjUwMzE5MTUuNDc5NzUwMS0uMzM1NDYxLjczMzY2MDgtLjgyMzQwNDIuNzMzNjYwOC0xLjQ0ODU4MTUgMC0uNDI2OTUwNC0uMTI2OTU1My0uNzc3NjU5Ni0uMzgxMDA3MS0xLjA2NzM3NTkxLS4yNTM3Njk2LS4yODk3MTYzMS0uNzMzMzc4Ny0uNTQ4OTM2MTctMS40MjQ3MjExLS43OTI5MDc4bC0yLjA0NTI1MDctLjY4NjE3MDIxYy0xLjAyOTc0OS0uMzUwNzA5MjItMS43OTE0ODExLS44NjkxNDg5NC0yLjI1Njk4NC0xLjU1NTMxOTE1LS40NjU1MDMtLjY3MDkyMTk5LS43MDU0NDg2LTEuNDE4MDg1MTEtLjcwNTQ0ODYtMi4yMTA5OTI5MSAwLS42NDA0MjU1My4xMjcwOTY0LTEuMjA0NjA5OTMuMzgxMDA3MS0xLjY5MjU1MzE5LjI1Mzc2OTYtLjQ4Nzk0MzI2LjU5MjQ1ODMtLjkxNDg5MzYyIDEuMDE1NjQyOC0xLjI1MDM1NDYxLjQyMzE4NDUtLjM1MDcwOTIyLjkwMjc5MzYtLjYwOTkyOTA4IDEuNDY3MDM5Ni0uNzkyOTA3OC41NjQyNDYtLjE4Mjk3ODcyIDEuMTU2NzA0My0uMjU5MjE5ODYgMS43NzczNzQ5LS4yNTkyMTk4Ni4zMTAxOTQzIDAgLjYzNDc3NjguMDE1MjQ4MjMuOTQ0OTcxLjA2MDk5MjkxLjMyNDU4MjUuMDQ1NzQ0NjguNjIwNjcwNi4xMDY3Mzc1OS45MTY4OTk4LjE2NzczMDUuMjgyMTIzLjA3NjI0MTEzLjU1MDEzOTguMTUyNDgyMjcuODA0MTkxNi4yNDM5NzE2My4yNTM3Njk2LjA5MTQ4OTM2LjQ1MTM5NjguMTgyOTc4NzIuNTkyNDU4My4yNzQ0NjgwOC4xOTc0ODYxLjEyMTk4NTgyLjMzODU0NzYuMjQzOTcxNjMuNDIzMTg0NS4zODEyMDU2OC4wODQ2MzY5LjEyMTk4NTgxLjEyNjk1NTMuMjg5NzE2MzEuMTI2OTU1My41MDMxOTE0OXYuNzE2NjY2NjZjMCAuMzIwMjEyNzctLjExMjg0OTIuNDg3OTQzMjYtLjMyNDQ0MTQuNDg3OTQzMjYtLjExMjg0OTIgMC0uMjk2MjI5Mi0uMDYwOTkyOS0uNTM2MDMzNy0uMTgyOTc4NzItLjgwNDA1MDYtLjM5NjQ1MzktMS43MDY4NDQyLS41OTQ2ODA4NS0yLjcwODM4MDgtLjU5NDY4MDg1LS44MDQwNTA2IDAtMS40Mzg4MjczLjEzNzIzNDA0LTEuODc2MTE4LjQyNjk1MDM1LS40MzcyOTA2LjI4OTcxNjMyLS42NjI5ODkuNzMxOTE0OS0uNjYyOTg5IDEuMzU3MDkyMiAwIC40MjY5NTAzNi4xNDEwNjE1Ljc5MjkwNzguNDIzMTg0NSAxLjA4MjYyNDEyLjI4MjEyMy4yODk3MTYzMS44MDQwNTA1LjU3OTQzMjYyIDEuNTUxNjc2NS44Mzg2NTI0OGwyLjAwMzA3MzMuNjg2MTcwMjFjMS4wMTU2NDI4LjM1MDcwOTIyIDEuNzQ5MTYyNi44Mzg2NTI0OCAyLjE4NjQ1MzIgMS40NjM4Mjk3OS40MzcyOTA3LjYyNTE3NzMuNjQ4ODgzIDEuMzQxODQzOTcuNjQ4ODgzIDIuMTM0NzUxNzUgMCAuNjU1NjczOC0uMTI2OTU1NCAxLjI1MDM1NDYtLjM2Njc1OTkgMS43Njg3OTQzLS4yNTM5MTA4LjUxODQzOTgtLjU5MjQ1ODQuOTc1ODg2Ni0xLjAyOTc0OSAxLjM0MTg0NC0uNDM3MjkwNy4zODEyMDU3LS45NTkyMTgyLjY1NTY3MzgtMS41NjU3ODI3Ljg1MzkwMDctLjYzNDc3NjcuMjEzNDc1Mi0xLjI5Nzc2NTguMzIwMjEyOC0yLjAxNzE3OTQuMzIwMjEyOHoiLz48cGF0aCBmaWxsPSIjRkY5OTAwIiBkPSJNNDkuODc1NTA3IDQxLjAwNTkzNzJjLTQuNzA1MTM2NyAzLjY3NDQwNTEtMTEuNTQxMTcxMiA1LjYyNTAxNTItMTcuNDE4ODczOCA1LjYyNTAxNTItOC4yMzc1NjQ2IDAtMTUuNjU5OTUzNjEtMy4yMjA3NzQ4LTIxLjI2NjA3Mzk4LTguNTczNjExOS0uNDQzNDg0MTYtLjQyMzM4ODItLjA0MjkwMzk4LS45OTc5ODY1LjQ4NjI0NTE0LS42NjUzMjQ0IDYuMDYzNzYyODUgMy43MTk3NjgyIDEzLjU0MzIxNDE0IDUuOTcyNzk4NCAyMS4yODAzNzUyNCA1Ljk3Mjc5ODQgNS4yMTk5ODQ2IDAgMTAuOTU0ODE2OS0xLjE0OTE5NjYgMTYuMjMyMDA2Ny0zLjUwODA3NC43ODY1NzMtLjM3ODAyNTIgMS40NTg3MzU0LjU0NDM1NjMuNjg2MzIwNyAxLjE0OTE5Njd6bTEuOTU5NDI0OS0yLjM1ODg3NzNjLS42MDA3OTg4LS44MTY1MzQ1LTMuOTc1NzY5LS4zOTMxNDYzLTUuNTA2MDExMS0uMTk2NTczMi0uNDU3Nzg1NS4wNjA0ODQxLS41MjkyOTIxLS4zNjI5MDQyLS4xMTQ0MTA2LS42ODA0NDUzIDIuNjg4NjQ5Ni0xLjk5NTk3MzIgNy4xMDc2MTY3LTEuNDIxMzc0OCA3LjYyMjYwNzYtLjc1NjA1MDUuNTE0ODQ3Ny42ODA0NDU0LS4xNDMwMTMzIDUuMzUyODM3MS0yLjY2MDE5IDcuNTkwNzQ2My0uMzg1OTkyOC4zNDc3ODMyLS43NTc4MjczLjE2NjMzMTEtLjU4NjM1NDQtLjI4NzI5OTEuNTcyMDUzMS0xLjQ5Njk3OTkgMS44NDUwMTQzLTQuODY4OTY0OCAxLjI0NDM1ODUtNS42NzAzNzgyeiIvPjwvZz48L3N2Zz4=',
  });

  config.addProvider('registry.upbound.io/crossplane/provider-aws', '>=v0.14.0-0');
  config.addProvider('registry.upbound.io/crossplane/provider-helm', '>=v0.3.6-0');

  return yaml;
}

export function postgresYaml(crossplanePackage: App): Chart {
  const yaml = new Chart(crossplanePackage, 'postgres-api');
  const xrd = new crossplane.CompositeResourceDefinition(yaml, 'postgres-xrd', {
    name: 'compositepostgresqlinstances.aws.platformref.crossplane.io',
  });

  xrd.group('aws.platformref.crossplane.io');
  xrd.claimKind('PostgreSQLInstance').plural('postgresqlinstances');
  xrd.kind('CompositePostgreSQLInstance').plural('compositepostgresqlinstances');
  xrd.connectionSecret().key('username').key('password').key('endpoint').key('port').defaultNamespace('crossplane-system');

  let xrdNetRef: crossplane.SchemaPropString;
  let xrdStorageGB: crossplane.SchemaPropInteger;

  xrd.version('v1alpha1').served().referencable()
    .spec().with(crossplane.Prop.for({
      object: (spec) => {
        spec.propObject('parameters').required().with(crossplane.Prop.for({
          object: (params) => {
            params.uiSection( {
              title: 'Database Size',
              description: 'Enter information to size your database',
            });

            xrdStorageGB = params.propInteger('storageGB').required().min(1).max(500)
              .description('GB of storage for your database')
              .uiInput({
                name: 'storageGB',
                inputType: crossplane.InputType.SINGLE_INPUT,
                title: 'Storage (GB)',
                default: 5,
              });

            params.propObject('networkRef').required()
              .description('A reference to the Network object that this postgres should be connected to.')
              .with(crossplane.Prop.for({
                object: (networkRef) => {

                  xrdNetRef = networkRef.propString('id')
                    .description('ID of the Network object this ref points to.')
                    .required()
                    .uiInput({
                      name: 'networkRef',
                      inputType: crossplane.InputType.SINGLE_INPUT,
                      title: 'Network Ref',
                      default: 'platform-ref-aws-network',
                      customError: 'Network ref is required and should match the network ref of the app cluster.',
                    });

                },
              }));

            params.propString('writeSecretRef').implicit().required()
              .uiInput({
                name: 'writeSecretRef',
                inputType: crossplane.InputType.SINGLE_INPUT,
                title: 'Connection Secret Ref',
                description: 'name of the secret to write to this namespace',
                default: 'db-conn',
                path: '.spec.writeConnectionSecretToRef.name',
              });
          },
        }));

      },
    }));

  const composition = new crossplane.Composition(yaml, 'postgres-composition', xrd, {
    name: 'compositepostgresqlinstances.aws.platformref.crossplane.io',
    metadata: {
      labels: {
        provider: 'aws',
      },
    },
  });

  //TODO: use imported provider-aws types
  composition.addResource(db.DbSubnetGroup.manifest({
    spec: {
      forProvider: {
        region: 'us-west-2',
        description: 'An excellent formation of subnetworks.',
      },
      deletionPolicy: db.DbSubnetGroupSpecDeletionPolicy.DELETE,
    },
  }))
    .mapFieldPath(xrdNetRef!.meta.path, 'spec.forProvider.subnetIdSelector.matchLabels[networks.aws.platformref.crossplane.io/network-id]');

  composition.addResource(db.RdsInstance.manifest({
    spec: {
      forProvider: {
        region: 'us-west-2',
        dbSubnetGroupNameSelector: {
          matchControllerRef: true,
        },
        dbInstanceClass: 'db.t2.small',
        masterUsername: 'masteruser',
        engine: 'postgres',
        engineVersion: '9.6',
        skipFinalSnapshotBeforeDeletion: true,
        publiclyAccessible: false,
      },
      writeConnectionSecretToRef: {
        namespace: 'crossplane-system',
        name: 'default-db-conn',
      },
      deletionPolicy: db.RdsInstanceSpecDeletionPolicy.DELETE,
    },
  }))
    .mapFieldPathXFormStringFormat('metadata.uid', '%s-postgresql', 'spec.writeConnectionSecretToRef.name')
    .mapFieldPath(xrdStorageGB!.meta.path, 'spec.forProvider.allocatedStorage')
    .mapFieldPath(xrdNetRef!.meta.path, 'spec.forProvider.vpcSecurityGroupIDSelector.matchLabels[networks.aws.platformref.crossplane.io/network-id]')
    .connectionDetailsFromXrd();

  return yaml;
}

export function networkYaml(crossplanePackage: App): Chart {
  const yaml = new Chart(crossplanePackage, 'network-api');
  xrds.compositenetworksAwsPlatformrefCrossplaneIo(yaml, 'network-xrd');
  comp.compositenetworksAwsPlatformrefCrossplaneIo(yaml, 'network-composition');

  return yaml;
}

export function clusterYaml(crossplanePackage: App): Chart {
  const yaml = new Chart(crossplanePackage, 'cluster-api');
  xrds.compositeclustersAwsPlatformrefCrossplaneIo(yaml, 'cluster-xrd');
  comp.compositeclustersAwsPlatformrefCrossplaneIo(yaml, 'cluster-composition');

  xrds.eksAwsPlatformrefCrossplaneIo(yaml, 'eks-xrd');
  comp.eksAwsPlatformrefCrossplaneIo(yaml, 'eks-composition');

  xrds.servicesAwsPlatformrefCrossplaneIo(yaml, 'services-xrd');
  comp.servicesAwsPlatformrefCrossplaneIo(yaml, 'services-composition');

  return yaml;
}

function main() {
  const crossplanePackage = new App();
  configYaml(crossplanePackage);
  clusterYaml(crossplanePackage);
  networkYaml(crossplanePackage);
  postgresYaml(crossplanePackage);

  crossplanePackage.synth();
}

main();
