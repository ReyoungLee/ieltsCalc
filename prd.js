'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var scoreMap = [1, 2, 2.5, 3, 3, 3.5, 3.5, 3.5, 3.5, 4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 6, 6.5, 6.5, 6.5, 7, 7, 7, 7.5, 7.5, 8, 8, 8.5, 8.5, 9, 9];

var _document$querySelect = document.querySelectorAll('p'),
    _document$querySelect2 = _slicedToArray(_document$querySelect, 2),
    result = _document$querySelect2[0],
    totalResult = _document$querySelect2[1],
    _document$querySelect3 = document.querySelectorAll('button'),
    _document$querySelect4 = _slicedToArray(_document$querySelect3, 2),
    calcItem = _document$querySelect4[0],
    calcAll = _document$querySelect4[1],
    _document$querySelect5 = document.querySelectorAll('.amount input'),
    _document$querySelect6 = _slicedToArray(_document$querySelect5, 2),
    amountL = _document$querySelect6[0],
    amountR = _document$querySelect6[1],
    itemScores = document.querySelectorAll('.score input');

calcItem.onclick = function () {
	var listeningAmount = scoreMap[amountL.value - 1] || 0,
	    readingAmount = scoreMap[amountR.value - 1] || 0;
	result.innerHTML = '\u542C\u529B\u5206\u6570 ' + listeningAmount + ', \u9605\u8BFB\u5206\u6570 ' + readingAmount;
};

calcAll.onclick = function () {
	var total = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = itemScores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var item = _step.value;

			total += +item.value;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	total /= 4;
	var int = parseInt(total),
	    dec = total - int;
	if (dec < 0.25) {
		total = int;
	} else if (dec < 0.75) {
		total = int + 0.5;
	} else {
		total = int + 1;
	}
	totalResult.innerHTML = '\u603B\u5206 ' + total;
};
