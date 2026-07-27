'use client';

import React, { useState, useEffect } from 'react';
import { getStoredConsent, setStoredConsent, initAnalyticsProviders, ConsentSettings, DEFAULT_CONSENT } from '@/lib/analytics/providers';
import { Button } from '@/components/ui/Button';
import { Cookie, Settings } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentSettings>(DEFAULT_CONSENT);

  useEffect(() => {
    const timer = setTimeout(() => {
      const stored = getStoredConsent();
      if (!stored) {
        setIsVisible(true);
      } else {
        setConsent(stored);
        initAnalyticsProviders(stored);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    const fullConsent: ConsentSettings = { analytics: true, marketing: true, functional: true };
    setStoredConsent(fullConsent);
    setConsent(fullConsent);
    initAnalyticsProviders(fullConsent);
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    setStoredConsent(consent);
    initAnalyticsProviders(consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 animate-in slide-in-from-bottom duration-300"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="bg-neutral-900 text-white rounded-3xl p-6 shadow-2xl border border-neutral-800 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-neutral-800 rounded-xl text-amber-400">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 id="cookie-consent-title" className="text-base font-bold font-serif text-white">
              Private Client Privacy & Cookies
            </h3>
            <span className="text-[11px] text-neutral-400">GDPR & CCPA Compliant Preference Center</span>
          </div>
        </div>

        <p id="cookie-consent-desc" className="text-xs text-neutral-300 leading-relaxed">
          We use essential cookies and privacy-focused telemetry to personalize your bespoke atelier experience, optimize Core Web Vitals, and enable secure checkout.
        </p>

        {showSettings && (
          <div className="flex flex-col gap-3 pt-3 border-t border-neutral-800 text-xs">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-semibold text-neutral-200">Analytics & Performance</span>
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) => setConsent((p) => ({ ...p, analytics: e.target.checked }))}
                className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-semibold text-neutral-200">Marketing & Campaign Pixel</span>
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) => setConsent((p) => ({ ...p, marketing: e.target.checked }))}
                className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-semibold text-neutral-200">Functional Experience</span>
              <input type="checkbox" checked disabled className="w-4 h-4 accent-neutral-600 rounded" />
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-neutral-800">
          <Button
            variant="primary"
            size="sm"
            onClick={handleAcceptAll}
            className="bg-white text-black hover:bg-neutral-200 font-bold text-xs"
          >
            Accept All Cookies
          </Button>

          {showSettings ? (
            <Button
              variant="outline"
              size="sm"
              onClick={handleSaveCustom}
              className="text-xs text-neutral-300 border-neutral-700 hover:bg-neutral-800"
            >
              Save Preferences
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSettings(true)}
              className="text-xs text-neutral-300 border-neutral-700 hover:bg-neutral-800"
            >
              <Settings className="w-3.5 h-3.5 mr-1" /> Customize
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
