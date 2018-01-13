package com.contacts.module;

import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PhoneCall extends ReactContextBaseJavaModule {

    public PhoneCall(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PhoneCall";
    }

    @ReactMethod
    public void call(String number) {
        Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse("tel:" + number));
        getReactApplicationContext().startActivity(intent);
    }

}