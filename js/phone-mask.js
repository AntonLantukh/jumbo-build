var phoneMask=function(){"use strict";return function(e){var t="+7 (___) ___-__-__",a=e.target,n=t.replace(/\D/g,""),c=a.value.replace(/\D/g,""),r=0;a.setCustomValidity(""),n.length>=c.length&&(c=n),a.value=t.replace(/./g,function(e){return/[_\d]/.test(e)&&r<c.length?c.charAt(r++):r>=c.length?"":e}),function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var a=t.createTextRange();a.collapse(!0),a.moveEnd("character",e),a.moveStart("character",e),a.select()}}(a.value.length,a)}}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS9qcy9waG9uZS1tYXNrLmpzIl0sIm5hbWVzIjpbImV2ZW50IiwibWF0cml4IiwiaW5wdXQiLCJ0YXJnZXQiLCJtYXNrIiwidmFsIiwiaSIsInNldEN1c3RvbVZhbGlkaXR5IiwibGVuZ3RoIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJyZXBsYWNlIiwiZWxlbWVudCIsInRlc3QiLCJjaGFyQXQiLCJwb3MiLCJlbGVtIiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInNldEN1cnNvclBvc2l0aW9uIiwiY3JlYXRlVGV4dFJhbmdlIiwicmFuZ2UiLCJtb3ZlRW5kIl0sIm1hcHBpbmdzIjoiNkNBVUcsU0FBQUEsR0FDRixJQVhEQyxFQUFBQSxxQkFlUUMsRUFBUUYsRUFBTUcsT0FGaEJDLEVBQU9ILEVBQUNELFFBQVUsTUFBWCxJQUNYSyxFQUFNSixFQUFBQSxNQUFBQSxRQUFBQSxNQUFBQSxJQUNOSyxFQUFNSixFQUVOQSxFQUFJRyxrQkFBSixJQUdBSCxFQUFNSyxRQUFORixFQUFBRyxTQUlFSCxFQUFNSSxHQUNOUCxFQUFBUSxNQUFBVCxFQUFBVSxRQUFBLEtBQUEsU0FBQUMsR0FJQSxNQUFJLFFBQVFDLEtBQUtELElBQVlOLEVBQUlELEVBQUlHLE9BRnZDSCxFQUFBUyxPQUFBUixLQUVNQSxHQUFBRCxFQUFRUSxPQUNWLEdBRUlQLElBaENnQixTQUFDUyxFQUFLQyxHQUU5QixHQURBQSxFQUFLQyxRQUNERCxFQUFLRSxrQkFGWEYsRUFBTUcsa0JBQW9CSixFQUFBQSxRQUNuQkUsR0FBQUEsRUFBTEcsZ0JBQUEsQ0FDQSxJQUFJSixFQUFLRSxFQUFBQSxrQkFDUEYsRUFBQUEsVUFBS0UsR0FDTkcsRUFGREMsUUFFV04sWUFBS0ksR0FDZEMsRUFBTUEsVUFBUUwsWUFBS0ksR0FDbkJDLEVBQUFBLFVBOEJHRixDQUFBakIsRUFBQVEsTUFBQUYsT0FBQU4iLCJmaWxlIjoicGhvbmUtbWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNldEN1cnNvclBvc2l0aW9uID0gKHBvcywgZWxlbSkgPT4ge1xuICBlbGVtLmZvY3VzKCk7XG4gIGlmIChlbGVtLnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgZWxlbS5zZXRTZWxlY3Rpb25SYW5nZShwb3MsIHBvcyk7XG4gIH0gZWxzZSBpZiAoZWxlbS5jcmVhdGVUZXh0UmFuZ2UpIHtcbiAgICBjb25zdCByYW5nZSA9IGVsZW0uY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgcmFuZ2UubW92ZUVuZChcImNoYXJhY3RlclwiLCBwb3MpO1xuICAgIHJhbmdlLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCBwb3MpO1xuICAgIHJhbmdlLnNlbGVjdCgpO1xuICB9XG59O1xuXG5jb25zdCBtYXNrID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IG1hdHJpeCA9IGArNyAoX19fKSBfX18tX18tX19gO1xuICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgbGV0IGRlZmF1bHRWYWx1ZSA9IG1hdHJpeC5yZXBsYWNlKC9cXEQvZywgYGApO1xuICBsZXQgdmFsID0gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csIGBgKTtcbiAgbGV0IGkgPSAwO1xuXG4gIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KGBgKTtcblxuICAvLyBTZXR0aW5nIHRvIGRlZmF1bHQgaWYgMSB2YWx1ZVxuICBpZiAoZGVmYXVsdFZhbHVlLmxlbmd0aCA+PSB2YWwubGVuZ3RoKSB7XG4gICAgdmFsID0gZGVmYXVsdFZhbHVlO1xuICAgfVxuXG4gIC8vIE1vZGlmeWluZyBtYXNrXG4gIGlucHV0LnZhbHVlID0gbWF0cml4LnJlcGxhY2UoLy4vZywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGlmICgvW19cXGRdLy50ZXN0KGVsZW1lbnQpICYmIGkgPCB2YWwubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdmFsLmNoYXJBdChpKyspO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaSA+PSB2YWwubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBgYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHNldEN1cnNvclBvc2l0aW9uKGlucHV0LnZhbHVlLmxlbmd0aCwgaW5wdXQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFzaztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
