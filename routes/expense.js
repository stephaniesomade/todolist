const express = require("express");
const router = express.Router();

const ExpenseController = require("../controllers/expense")

router.get('/directdebit', ExpenseController.DirectDebit)
router.post('/directdebit', ExpenseController.UpdateDebit)
router.get('/january', ExpenseController.January)
router.post('/january', ExpenseController.AddToJanuary)
router.post('/delete/january/:category/:amount', ExpenseController.DeleteFromJanuary)
router.get('/february', ExpenseController.February)
router.post('/february', ExpenseController.AddToFebruary)
router.post('/delete/february/:category/:amount', ExpenseController.DeleteFromFebruary)
router.get('/march', ExpenseController.March)
router.post('/march', ExpenseController.AddToMarch)
router.post('/delete/march/:category/:amount', ExpenseController.DeleteFromMarch)
router.get('/april', ExpenseController.April)
router.post('/april', ExpenseController.AddToApril)
router.post('/delete/april/:category/:amount', ExpenseController.DeleteFromApril)
router.get('/may', ExpenseController.May)
router.post('/may', ExpenseController.AddToMay)
router.post('/delete/may/:category/:amount', ExpenseController.DeleteFromMay)
router.get('/june', ExpenseController.June)
router.post('/june', ExpenseController.AddToJune)
router.post('/delete/june/:category/:amount', ExpenseController.DeleteFromJune)
router.get('/july', ExpenseController.July)
router.post('/july', ExpenseController.AddToJuly)
router.post('/delete/july/:category/:amount', ExpenseController.DeleteFromJuly)
router.get('/august', ExpenseController.August)
router.post('/august', ExpenseController.AddToAugust)
router.post('/delete/august/:category/:amount', ExpenseController.DeleteFromAugust)
router.get('/september', ExpenseController.September)
router.post('/september', ExpenseController.AddToSeptember)
router.post('/delete/september/:category/:amount', ExpenseController.DeleteFromSeptember)
router.get('/october', ExpenseController.October)
router.post('/october', ExpenseController.AddToOctober)
router.post('/delete/october/:category/:amount', ExpenseController.DeleteFromOctober)
router.get('/november', ExpenseController.November)
router.post('/november', ExpenseController.AddToNovember)
router.post('/delete/november/:category/:amount', ExpenseController.DeleteFromNovember)
router.get('/december', ExpenseController.December)
router.post('/december', ExpenseController.AddToDecember)
router.post('/delete/december/:category/:amount', ExpenseController.DeleteFromDecember)
module.exports = router;
