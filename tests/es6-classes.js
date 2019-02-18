// issue #3 (ng-annotate-patched) - Support for ES6 Classes

(function(){
    class ClassTest1 {
        constructor($log) {}
    }
    /** @ngInject */
    class ClassTest1_noargs {
        constructor() {}
    }
    /** @ngInject */
    class ClassTest1_annotated {
        constructor($log) {}
    }
    class ClassTest1_annotated_constructor {
        /** @ngInject */
        constructor($log) {}
    }
    class ClassTest1_prologue_directive {
        constructor($log) {
            "ngInject";
        }
    }

    let ClassTest2 = class {
        constructor($log) {}
    };
    /** @ngInject */
    let ClassTest2_noargs = class {
        constructor() {}
    };
    /** @ngInject */
    let ClassTest2_annotated = class {
        constructor($log) {}
    };
    let ClassTest2_annotated_expression = /** @ngInject */ class {
        constructor($log) {}
    };
    let ClassTest2_annotated_constructor = class {
        /** @ngInject */
        constructor($log) {}
    };
    let ClassTest2_prologue_directive = class {
        constructor($log) {
            "ngInject";
        }
    };

    let ClassTest3,
        ClassTest3_noargs,
        ClassTest3_annotated,
        ClassTest3_annotated_expression,
        ClassTest3_annotated_constructor,
        ClassTest3_prologue_directive;

    ClassTest3 = class {
        constructor($log) {}
    };
    /** @ngInject */
    ClassTest3_noargs = class {
        constructor() {}
    };
    /** @ngInject */
    ClassTest3_annotated = class {
        constructor($log) {}
    };
    ClassTest3_annotated_expression = /** @ngInject */ class {
        constructor($log) {}
    };
    ClassTest3_annotated_constructor = class {
        /** @ngInject */
        constructor($log) {}
    };
    ClassTest3_prologue_directive = class {
        constructor($log) {
            "ngInject";
        }
    };

    let ClassTest4_var = class ClassTest4{
        constructor($log) {}
    };
    /** @ngInject */
    let ClassTest4_noargs_var = class ClassTest4_noargs {
        constructor() {}
    };
    /** @ngInject */
    let ClassTest4_annotated_var = class ClassTest4_annotated {
        constructor($log) {}
    };
    let ClassTest4_annotated_expression_var = /** @ngInject */ class ClassTest4_annotated_expression {
        constructor($log) {}
    };
    let ClassTest4_annotated_constructor_var = class ClassTest4_annotated_constructor {
        /** @ngInject */
        constructor($log) {}
    };
    let ClassTest4_prologue_directive_var = class ClassTest4_prologue_directive {
        constructor($log) {
            "ngInject";
        }
    };

    let ClassTest5_var,
        ClassTest5_noargs_var,
        ClassTest5_annotated_var,
        ClassTest5_annotated_expression_var,
        ClassTest5_annotated_constructor_var,
        ClassTest5_prologue_directive_var;

    ClassTest5_var = class ClassTest5 {
        constructor($log) {}
    };
    /** @ngInject */
    ClassTest5_noargs_var = class ClassTest5_noargs {
        constructor() {}
    };
    /** @ngInject */
    ClassTest5_annotated_var = class ClassTest5_annotated {
        constructor($log) {}
    };
    ClassTest5_annotated_expression_var = /** @ngInject */ class ClassTest5_annotated_expression {
        constructor($log) {}
    };
    ClassTest5_annotated_constructor_var = class ClassTest5_annotated_constructor {
        /** @ngInject */
        constructor($log) {}
    };
    ClassTest5_prologue_directive_var = class ClassTest5_prologue_directive {
        constructor($log) {
            "ngInject";
        }
    };
})();
