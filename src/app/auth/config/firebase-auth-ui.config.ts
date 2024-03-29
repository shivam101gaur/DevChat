import { firebase, firebaseui } from 'firebaseui-angular';

// NOTE FIREBASE UI DOCS - https://github.com/firebase/firebaseui-web?tab=readme-ov-file#firebaseui-for-web--auth
// READ config DOCS  - https://github.com/firebase/firebaseui-web#generic-oauth-provider
export const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'redirect',
    signInOptions: [
        // PHONE CONFIG - https://github.com/firebase/firebaseui-web?tab=readme-ov-file#configure-phone-provider
        {
            fullLabel: 'Mobile',
            buttonColor: 'teal',
            recaptchaParameters: {
                type: 'image',
                badge: 'bottomright',
                size: 'invisible'
            },
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: 'In'
        },
        // EMAIL CONFIG - https://github.com/firebase/firebaseui-web?tab=readme-ov-file#email-link-authentication
        // {
        //     requireDisplayName: false,
        //     disableSignUp:{ status:true },
        //     provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        // },
        { provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID },
        { provider: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID }
    ],
    // //term of service
    // tosUrl: '<your-tos-link>',
    // //privacy url
    // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE

};
