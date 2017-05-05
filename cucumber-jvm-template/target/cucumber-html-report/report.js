$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PrincessWebSample.feature");
formatter.feature({
  "line": 2,
  "name": "Access Home Page of Princess.com and get cruise search results using find widget",
  "description": "",
  "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 4364579310,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Open Princess Website Home Page and search cruises for given input",
  "description": "",
  "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget;open-princess-website-home-page-and-search-cruises-for-given-input",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open princess website \"HOME\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I validate title and URL",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate all URL on \"HOME\" page if any broken",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "HOME",
      "offset": 25
    }
  ],
  "location": "WebHomePageSteps.i_open_princess_website(String)"
});
formatter.result({
  "duration": 17815631712,
  "status": "passed"
});
formatter.match({
  "location": "WebHomePageSteps.i_print_title_and_URL()"
});
formatter.result({
  "duration": 2037010911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HOME",
      "offset": 21
    }
  ],
  "location": "SearchAPISteps.validate_all_URL_on_page_if_any_broken(String)"
});
formatter.result({
  "duration": 132444737427,
  "error_message": "java.lang.IllegalArgumentException: Request URI cannot end with ?\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.newFilterContext(RequestSpecificationImpl.groovy:1025)\r\n\tat sun.reflect.GeneratedMethodAccessor26.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1594)\r\n\tat sun.reflect.GeneratedMethodAccessor61.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:160)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat step_definitions.SearchAPISteps.validate_all_URL_on_page_if_any_broken(SearchAPISteps.java:70)\r\n\tat ✽.And validate all URL on \"HOME\" page if any broken(PrincessWebSample.feature:8)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://www.princess.com/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1414090944,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search Cruise Results using widget on Princess.com\u0027s Home Page",
  "description": "",
  "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget;search-cruise-results-using-widget-on-princess.com\u0027s-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I open princess website \"HOME\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I scroll to \"FIND A CRUISE\" section",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select \"Month_Year\" as \"\u003cMonthYear\u003e\" value",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Destination\" as \"\u003cDestination\u003e\" value",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Departure Port\" as \"\u003cDeparture Port\u003e\" value",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select \"Cruise Length\" as \"\u003cCruise Length\u003e\" value",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I press \"ViewResults\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I validate First Cruise \"Available\"",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget;search-cruise-results-using-widget-on-princess.com\u0027s-home-page;",
  "rows": [
    {
      "cells": [
        "MonthYear",
        "Destination",
        "Departure Port",
        "Cruise Length"
      ],
      "line": 21,
      "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget;search-cruise-results-using-widget-on-princess.com\u0027s-home-page;;1"
    },
    {
      "cells": [
        "June 2017",
        "Asia",
        "Singapore",
        "9 - 15 Days"
      ],
      "line": 22,
      "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget;search-cruise-results-using-widget-on-princess.com\u0027s-home-page;;2"
    },
    {
      "cells": [
        "October 2017",
        "Australia \u0026 New Zealand",
        "Sydney, Australia",
        "9 - 15 Days"
      ],
      "line": 23,
      "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget;search-cruise-results-using-widget-on-princess.com\u0027s-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3186524131,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search Cruise Results using widget on Princess.com\u0027s Home Page",
  "description": "",
  "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget;search-cruise-results-using-widget-on-princess.com\u0027s-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I open princess website \"HOME\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I scroll to \"FIND A CRUISE\" section",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select \"Month_Year\" as \"June 2017\" value",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Destination\" as \"Asia\" value",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Departure Port\" as \"Singapore\" value",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select \"Cruise Length\" as \"9 - 15 Days\" value",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I press \"ViewResults\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I validate First Cruise \"Available\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "HOME",
      "offset": 25
    }
  ],
  "location": "WebHomePageSteps.i_open_princess_website(String)"
});
formatter.result({
  "duration": 16030305448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIND A CRUISE",
      "offset": 13
    }
  ],
  "location": "WebHomePageSteps.i_scroll_to_section(String)"
});
formatter.result({
  "duration": 2023134386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Month_Year",
      "offset": 10
    },
    {
      "val": "June 2017",
      "offset": 26
    }
  ],
  "location": "WebHomePageSteps.i_select_as_value(String,String)"
});
formatter.result({
  "duration": 2443370955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Destination",
      "offset": 10
    },
    {
      "val": "Asia",
      "offset": 27
    }
  ],
  "location": "WebHomePageSteps.i_select_as_value(String,String)"
});
formatter.result({
  "duration": 2335406135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Departure Port",
      "offset": 10
    },
    {
      "val": "Singapore",
      "offset": 30
    }
  ],
  "location": "WebHomePageSteps.i_select_as_value(String,String)"
});
formatter.result({
  "duration": 2318969281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cruise Length",
      "offset": 10
    },
    {
      "val": "9 - 15 Days",
      "offset": 29
    }
  ],
  "location": "WebHomePageSteps.i_select_as_value(String,String)"
});
formatter.result({
  "duration": 2375593662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ViewResults",
      "offset": 9
    }
  ],
  "location": "WebHomePageSteps.i_press_button(String)"
});
formatter.result({
  "duration": 17582967572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Available",
      "offset": 25
    }
  ],
  "location": "WebHomePageSteps.i_validate_First_Cruise(String)"
});
formatter.result({
  "duration": 118361484,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertFalse(Assert.java:63)\r\n\tat org.testng.Assert.assertFalse(Assert.java:73)\r\n\tat step_definitions.WebHomePageSteps.i_validate_First_Cruise(WebHomePageSteps.java:86)\r\n\tat ✽.And I validate First Cruise \"Available\"(PrincessWebSample.feature:19)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://www.princess.com/find/searchResults.do");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1027082178,
  "status": "passed"
});
formatter.before({
  "duration": 3204988066,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search Cruise Results using widget on Princess.com\u0027s Home Page",
  "description": "",
  "id": "access-home-page-of-princess.com-and-get-cruise-search-results-using-find-widget;search-cruise-results-using-widget-on-princess.com\u0027s-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I open princess website \"HOME\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I scroll to \"FIND A CRUISE\" section",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select \"Month_Year\" as \"October 2017\" value",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Destination\" as \"Australia \u0026 New Zealand\" value",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Departure Port\" as \"Sydney, Australia\" value",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select \"Cruise Length\" as \"9 - 15 Days\" value",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I press \"ViewResults\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I validate First Cruise \"Available\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "HOME",
      "offset": 25
    }
  ],
  "location": "WebHomePageSteps.i_open_princess_website(String)"
});
formatter.result({
  "duration": 16185430114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIND A CRUISE",
      "offset": 13
    }
  ],
  "location": "WebHomePageSteps.i_scroll_to_section(String)"
});
formatter.result({
  "duration": 2036657280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Month_Year",
      "offset": 10
    },
    {
      "val": "October 2017",
      "offset": 26
    }
  ],
  "location": "WebHomePageSteps.i_select_as_value(String,String)"
});
formatter.result({
  "duration": 2417037559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Destination",
      "offset": 10
    },
    {
      "val": "Australia \u0026 New Zealand",
      "offset": 27
    }
  ],
  "location": "WebHomePageSteps.i_select_as_value(String,String)"
});
formatter.result({
  "duration": 2365152211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Departure Port",
      "offset": 10
    },
    {
      "val": "Sydney, Australia",
      "offset": 30
    }
  ],
  "location": "WebHomePageSteps.i_select_as_value(String,String)"
});
formatter.result({
  "duration": 2331128503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cruise Length",
      "offset": 10
    },
    {
      "val": "9 - 15 Days",
      "offset": 29
    }
  ],
  "location": "WebHomePageSteps.i_select_as_value(String,String)"
});
formatter.result({
  "duration": 2336876177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ViewResults",
      "offset": 9
    }
  ],
  "location": "WebHomePageSteps.i_press_button(String)"
});
formatter.result({
  "duration": 18472426563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Available",
      "offset": 25
    }
  ],
  "location": "WebHomePageSteps.i_validate_First_Cruise(String)"
});
formatter.result({
  "duration": 91926852,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertFalse(Assert.java:63)\r\n\tat org.testng.Assert.assertFalse(Assert.java:73)\r\n\tat step_definitions.WebHomePageSteps.i_validate_First_Cruise(WebHomePageSteps.java:86)\r\n\tat ✽.And I validate First Cruise \"Available\"(PrincessWebSample.feature:19)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://www.princess.com/find/searchResults.do");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 958292046,
  "status": "passed"
});
});