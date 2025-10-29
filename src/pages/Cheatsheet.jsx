import React, { useState, useEffect } from 'react';
import { Code, Search, BookOpen, Zap, Terminal, Braces, Database, Globe, Cpu, FileCode, ArrowLeft, Copy, Check, Download } from 'lucide-react';
import { cheatsheetData } from '../data/cheatsheet';

const CheatsheetApp = () => {
  const [selectedSheet, setSelectedSheet] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconMap = {
    FileCode: FileCode,
    Cpu: Cpu,
    Braces: Braces,
    Terminal: Terminal,
    Database: Database,
    Globe: Globe
  };

  const filteredCheatsheets = cheatsheetData.filter(sheet =>
    sheet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sheet.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const downloadCheatsheet = (sheet) => {
    let content = `${sheet.name} Cheatsheet\n${'='.repeat(50)}\n\n`;
    sheet.sections.forEach(section => {
      content += `${section.title}\n${'-'.repeat(30)}\n`;
      section.items.forEach(item => {
        content += `${item.code}\n  → ${item.description}\n\n`;
      });
      content += '\n';
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${sheet.id}-cheatsheet.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (selectedSheet) {
    const IconComponent = iconMap[selectedSheet.icon];
    
    return (
      <div className="lg:ml-64 min-h-screen bg-[#0a0f0d] text-[#e8f5e9]">
        {/* Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4caf50]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#0a0f0d]/90 backdrop-blur-lg border-b border-[#4caf50]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedSheet(null)}
                className="flex items-center gap-2 text-[#b9d9be] hover:text-[#4caf50] transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Cheatsheets</span>
              </button>
              <button
                onClick={() => downloadCheatsheet(selectedSheet)}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a2622] hover:bg-[#4caf50]/20 border border-[#4caf50]/20 rounded-lg transition-all"
              >
                <Download size={18} />
                <span>Download</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Title */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${selectedSheet.color}20` }}
              >
                <IconComponent size={32} style={{ color: selectedSheet.color }} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#e8f5e9]">{selectedSheet.name}</h1>
                <p className="text-[#b9d9be] mt-2">{selectedSheet.description}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2622] border border-[#4caf50]/20 rounded-full text-sm">
              <span className="text-[#81c784]">{selectedSheet.difficulty}</span>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {selectedSheet.sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="bg-[#1a2622]/50 rounded-2xl border border-[#4caf50]/10 p-6">
                <h2 className="text-2xl font-bold text-[#e8f5e9] mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => {
                    const itemId = `${sectionIdx}-${itemIdx}`;
                    return (
                      <div key={itemIdx} className="bg-[#0d1410] rounded-xl p-4 border border-[#4caf50]/5 hover:border-[#4caf50]/20 transition-all group">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              <code className="flex-1 text-[#4caf50] font-mono text-sm bg-[#000000] px-4 py-2 rounded-lg whitespace-pre-wrap break-all">
                                {item.code}
                              </code>
                              <button
                                onClick={() => copyToClipboard(item.code, itemId)}
                                className="p-2 hover:bg-[#4caf50]/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                                title="Copy to clipboard"
                              >
                                {copiedCode === itemId ? (
                                  <Check size={18} className="text-[#4caf50]" />
                                ) : (
                                  <Copy size={18} className="text-[#b9d9be]" />
                                )}
                              </button>
                            </div>
                            <p className="text-[#b9d9be] text-sm ml-4">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // Preview Page
  return (
    <div className="lg:ml-64 min-h-screen bg-[#0a0f0d] text-[#e8f5e9]">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4caf50]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-[#81c784]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <main className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className={`text-center mb-12 transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2622] border border-[#4caf50]/20 rounded-full text-sm text-[#81c784] mb-6">
              <BookOpen size={16} />
              <span>Quick Reference</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#e8f5e9] mb-4">
              Cheatsheet Hub
            </h1>
            <p className="text-xl text-[#b9d9be] max-w-2xl mx-auto">
              Quick reference guides for all your coding needs. From basics to advanced concepts.
            </p>
          </div>

          {/* Search */}
          <div className={`max-w-2xl mx-auto mb-12 transform transition-all duration-700 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a9681]" size={20} />
              <input
                type="text"
                placeholder="Search cheatsheets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#1a2622]/50 border border-[#4caf50]/20 rounded-xl text-[#e8f5e9] placeholder-[#7a9681] focus:outline-none focus:border-[#4caf50]/40 transition-all"
              />
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16 transform transition-all duration-700 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center p-4 bg-[#1a2622]/50 rounded-xl border border-[#4caf50]/10">
              <div className="text-3xl font-bold text-[#4caf50]">{cheatsheetData.length}</div>
              <div className="text-[#7a9681] mt-1 text-sm">Languages</div>
            </div>
            <div className="text-center p-4 bg-[#1a2622]/50 rounded-xl border border-[#4caf50]/10">
              <div className="text-3xl font-bold text-[#4caf50]">
                {cheatsheetData.reduce((acc, sheet) => acc + sheet.sections.length, 0)}
              </div>
              <div className="text-[#7a9681] mt-1 text-sm">Sections</div>
            </div>
            <div className="text-center p-4 bg-[#1a2622]/50 rounded-xl border border-[#4caf50]/10">
              <div className="text-3xl font-bold text-[#4caf50]">
                {cheatsheetData.reduce((acc, sheet) => 
                  acc + sheet.sections.reduce((sAcc, section) => sAcc + section.items.length, 0), 0
                )}
              </div>
              <div className="text-[#7a9681] mt-1 text-sm">Commands</div>
            </div>
          </div>

          {/* Cheatsheet Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCheatsheets.map((sheet, index) => {
              const IconComponent = iconMap[sheet.icon];
              return (
                <div
                  key={sheet.id}
                  className={`bg-[#1a2622]/50 rounded-2xl border border-[#4caf50]/10 p-6 hover:border-[#4caf50]/30 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105 transform delay-${(index + 3) * 100} ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  onClick={() => setSelectedSheet(sheet)}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${sheet.color}20` }}
                  >
                    <IconComponent size={28} style={{ color: sheet.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#e8f5e9] mb-2">{sheet.name}</h3>
                  <p className="text-[#b9d9be] text-sm mb-4">{sheet.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 bg-[#4caf50]/10 text-[#81c784] rounded-full border border-[#4caf50]/20">
                      {sheet.difficulty}
                    </span>
                    <div className="flex items-center gap-2 text-[#7a9681] text-sm">
                      <Code size={16} />
                      <span>{sheet.sections.length} sections</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCheatsheets.length === 0 && (
            <div className="text-center py-16">
              <Search size={48} className="mx-auto text-[#7a9681] mb-4" />
              <p className="text-[#b9d9be] text-lg">No cheatsheets found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-32 border-t border-[#4caf50]/10 bg-[#0a0f0d]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-[#7a9681] text-sm">
            <p>© 2025 Upcode GamerCave. Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheatsheetApp;