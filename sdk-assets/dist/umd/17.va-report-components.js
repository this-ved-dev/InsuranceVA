/*! License information is available at ../../LICENSE.txt and ../../LICENSE-3RD-PARTY.txt */(window["va-report-componentsJsonp"]=window["va-report-componentsJsonp"]||[]).push([[17],{3669:function(t,e,o){"use strict";o.r(e);e.default={"Alerts.noAlerts.txt":()=>"Nessun alert impostato per questo report.","BirdImage.image.txt":()=>"Immagine","ComboBox.clearFilter.txt":()=>"Cancella filtro","ComboBox.defautValueNoData.fmt":({categoryValue:t})=>t+" (Nessun dato)","ContextMenu.selectAll.txt":()=>"Seleziona tutto","ContextMenu.clearSelection.txt":()=>"Cancella selezione","ContextMenu.exportImage.txt":()=>"Esporta come immagine","ContextMenu.sortAscending.fmt":({role:t})=>t+": Crescente","ContextMenu.sortDescending.fmt":({role:t})=>t+": Decrescente","ContextMenu.sortAddAscending.fmt":({role:t})=>t+": Aggiungi crescente","ContextMenu.sortAddDescending.fmt":({role:t})=>t+": Aggiungi decrescente","ContextMenu.removeSortItem.fmt":({role:t})=>`Rimuovi ${t} dall’ordinamento`,"ContextMenu.removeSortLevel.txt":()=>"Rimuovi livello di ordinamento","ContextMenu.sort.txt":()=>"Ordina","ContextMenu.selectShortestPath.txt":()=>"Seleziona cammino minimo","ContextMenu.explain.txt":()=>"Spiega i dati","ContextMenu.explainRole.txt":({role:t})=>`Spiega ${t}...`,"DrillableTooltip.drill.txt":()=>"NAVIGA","DrillableTooltip.tooltip.txt":()=>"DESCRIZIONE","DrillableTooltip.links.txt":()=>"COLLEGAMENTI","DrillableTooltip.section.link.fmt":({page:t})=>"Collegamento alla pagina "+t,"DrillableTooltip.report.link.fmt":({report:t})=>"Collegamento al report "+t,"DrillableTooltip.external.link.fmt":({url:t})=>"Collegamento esterno a "+t,"DrillableTooltip.notAvailable.txt":()=>"Non disponibili","Breadcrumb.all.fmt":({label:t})=>"Tutto "+t,"BrowserCheck.title.txt":()=>"Controllo di WebGL","BrowserCheck.msg.txt":()=>"WebGL è disabilitato o non supportato dal browser in uso.   \nFai clic su OK per visualizzare il report nel visualizzatore classico.","EmailUtil.subject.multiple.txt":()=>"Report da rivedere","EmailUtil.tooLongEmail.txt":()=>"Superato il limite massimo della lunghezza dell’e-mail. Seleziona un numero minore di report da inviare per e-mail.","HiddenSectionDialog.close.txt":()=>"Chiudi","InfoPanel.information.txt":()=>"Informazioni","InfoPanel.comments.txt":()=>"Commenti","InfoPanel.alerts.txt":()=>"Alert","IncomingFilters.promptbars.txt":()=>"Barre dei prompt","Information.title.txt":()=>"Titolo","Information.name.txt":()=>"Nome:","Information.description.txt":()=>"Descrizione:","Information.displayRules.txt":()=>"Regole di visualizzazione:","Information.graphLevel.txt":()=>"A livello di grafico","Information.reportLevel.txt":()=>"A livello di report","Information.legend.txt":()=>"Legenda","Information.incomingFilters.txt":()=>"Filtri in ingresso:","Information.noIncomingFilters.txt":()=>"Nessun filtro in ingresso","Information.dataSourceFilters.txt":()=>"Filtri dell’origine dati:","Information.interactiveFilters.txt":()=>"Filtri interattivi:","MobileContainer.mobileBIMessage.txt":()=>"Accedi ai report SAS sul dispositivo mobile.","ObjectTypes.report.txt":()=>"Report","ObjectTypes.Report.BI.txt":()=>"Report SAS (2G)","ObjectTypes.Report.StoredProcess.txt":()=>"Report dello stored process","ObjectTypes.StoredProcess.txt":()=>"Stored process","MissingValues.label.txt":()=>"(valori mancanti)","PromptContainer.apply.txt":()=>"Applica","PromptContainer.cancel.txt":()=>"Annulla","TextFieldTypeAhead.validation.range.fmt":({min:t,max:e})=>`Il valore deve essere un numero fra ${t} e ${e}, inclusi.`,"TextFieldTypeAhead.validation.numeric.txt":()=>"Specifica un valore numerico valido.","TextFieldTypeAhead.validation.string.txt":()=>"Il valore non è valido per i dati assegnati.","TextFieldTypeAhead.categoryAndMeasureTooltip.fmt":({categoryLabel:t,measureLabel:e})=>`Immetti: ${t}, ${e}`,"TextFieldTypeAhead.categoryTooltip.fmt":({categoryLabel:t})=>"Immetti: "+t,"TextFieldTypeAhead.placeholder.fmt":({placeholderLabel:t})=>`Immetti ${t}...`,"RangeSlider.tooltip.fmt":({label:t,min:e,max:o})=>`${t}: ${e} - ${o}`,"PromptElement.categoryLabelValueAndMeasureLabelValueTooltip.fmt":({categoryLabel:t,categoryValue:e,measureLabel:o,measureValue:i})=>`${t}: ${e}, ${o}: ${i}`,"PromptElement.categoryLabelValueTooltip.fmt":({categoryLabel:t,categoryValue:e})=>`${t}: ${e}`,"ReportContainer.back.txt":()=>"Indietro","ReportContainer.reportCorrupted.txt":()=>"REPORT DANNEGGIATO","ReportContainer.themeLoadFailed.txt":()=>"Impossibile caricare il tema del report.","ReportContainer.restoreButton.tip.txt":()=>"Ripristina report","ReportContainer.restoreButtonAriaAnnounce.txt":()=>"Report ripristinato","ReportContainer.renderError.txt":()=>"Rilevato un errore. Impossibile visualizzare il report.","ReportContainer.component.renderError.txt":()=>"Rilevato un errore. Impossibile visualizzare il componente.","ReportContentPage.open.txt":()=>"Apri...","ReportContentPage.refreshReport.txt":()=>"Aggiorna report","ReportContentPage.editReport.txt":()=>"Modifica report","ReportContentPage.print.txt":()=>"Stampa...","ReportContentPage.email.txt":()=>"E-mail...","ReportContentPage.export.txt":()=>"Esporta in Excel...","ReportContentPage.reportProperties.txt":()=>"Proprietà del report","ReportContentPage.shareReport.txt":()=>"Condividi report","ReportContentPage.enableOverlays.txt":()=>"Abilita oggetti sovrapposti","ReportContentPage.disableOverlays.txt":()=>"Disabilita oggetti sovrapposti","ReportContentPage.link.txt":()=>"Collegamento...","ReportContentPage.settings.txt":()=>"Impostazioni...","ReportContentPage.editPlayback.txt":()=>"Modifica riproduzione","ReportContentPage.playReport.txt":()=>"Riproduci report","ReportContentPage.showFiltersButton.tip.txt":()=>"Mostra filtri con prompt","ReportContentPage.hideFiltersButton.tip.txt":()=>"Nascondi filtri con prompt","ReportContentPage.reportFilters.txt":()=>"A livello di report","ReportContentPage.pageFilters.txt":()=>"A livello di pagina","ReportContentPage.refreshRequired.txt":()=>"Occorre aggiornare il report","ReportContentPage.infoButton.tip.txt":()=>"Riquadro Informazioni","ReportContentPage.backButton.tip.txt":()=>"Visualizza tutti i report","ReportContentPage.overflowMenuButton.tip.txt":()=>"Altre opzioni","ReportContentPage.itemGroupName.txt":()=>"Report","ReportContentPage.maximizeButton.tip.txt":()=>"Ingrandisci report","ReportContentPage.closeButton.txt":()=>"Chiudi report","ReportContentPage.maximizeButtonAriaAnnounce.txt":()=>"Report ingrandito","ReportContentPage.resetReportState.txt":()=>"Ripristina stato predefinito del report","ReportContentPage.summary.txt":()=>"Mostra riepilogo","ReportManagerPage.objectMenu.open.txt":()=>"Apri","ReportManagerPage.objectMenu.edit.txt":()=>"Modifica","ReportManagerPage.objectMenu.summary.txt":()=>"Riepilogo","ReportManagerPage.objectMenu.properties.txt":()=>"Proprietà","ReportManagerPage.objectMenu.email.txt":()=>"E-mail...","ReportManagerPage.objectMenu.print.txt":()=>"Stampa","ReportManagerPage.browseReportsButton.txt":()=>"Sfoglia report","ReportManagerPage.newReportButton.txt":()=>"Nuovo report","ReportManagerPage.emptyView.message.txt":()=>"Non trovati report.","ReportManagerPage.emptyView.browseReportsButton.txt":()=>"Cerca report","ReportManagerPage.tableView.name.txt":()=>"Nome","ReportManagerPage.tableView.author.txt":()=>"Autore","ReportManagerPage.tableView.lastModified.txt":()=>"Ultima modifica","ReportManagerPage.openButton.tip.txt":()=>"Apri report","ReportManagerPage.emailButton.tip.txt":()=>"Invia report per e-mail","ReportManagerPage.printButton.tip.txt":()=>"Stampa report in PDF","ReportManagerPage.propertiesButton.tip.txt":()=>"Proprietà del report","ReportObject.multipleReferences.error.txt":()=>"Gli oggetti del report non possono essere usati in più contesti.","ReportObject.notFound.error.txt":()=>"Impossibile trovare il nome dell’oggetto nel report specificato.","ReportObject.invalidPage.error.txt":()=>"La pagina specificata non è valida.","ReportPropertiesDialog.open.txt":()=>"Apri","ReportPropertiesDialog.close.txt":()=>"Chiudi","ReportPropertiesDialog.name.txt":()=>"Nome:","ReportPropertiesDialog.description.txt":()=>"Descrizione:","ReportPropertiesDialog.keywords.txt":()=>"Parole chiave:","ReportPropertiesDialog.type.txt":()=>"Tipo:","ReportPropertiesDialog.location.txt":()=>"Percorso:","ReportPropertiesDialog.createdBy.txt":()=>"Autore:","ReportPropertiesDialog.dateCreated.txt":()=>"Data di creazione:","ReportPropertiesDialog.modifiedBy.txt":()=>"Autore modifica:","ReportPropertiesDialog.dateModified.txt":()=>"Data di modifica:","ReportSections.newPageButton.txt":()=>"Nuova pagina","ReportSummaryDialog.title.txt":()=>"Riepilogo","ReportSummaryDialog.open.txt":()=>"Apri","ReportSummaryDialog.cancel.txt":()=>"Annulla","ReportSummaryDialog.close.txt":()=>"Chiudi","ReportSummaryDialog.noSummary.txt":()=>"Riepilogo non disponibile.","ReportTileBody.modifiedBy.txt":()=>"Autore modifica:","ReportTileBody.lastModified.txt":()=>"Ultima modifica:","VAViewerSettingsProvider.reportViewer.txt":()=>"SAS Report Viewer","VAViewerSettingsProvider.reportRefreshSettings.txt":()=>"Aggiornamento del report","VAViewerSettingsProvider.reportAutoRefresh.txt":()=>"Aggiornamento automatico del report","VAViewerSettingsProvider.reportRefreshFrequency.txt":()=>"Controlla eventuali aggiornamenti dopo questo numero di minuti:","VAViewerSettingsProvider.alert.group.label.txt":()=>"Notifiche degli alert","VAViewerSettingsProvider.alert.field.label.txt":()=>"Seleziona le notifiche degli alert predefinite:","VAViewerSettingsProvider.alert.email.txt":()=>"Invia messaggi e-mail","VAViewerSettingsProvider.alert.sms.txt":()=>"Invia messaggi di testo SMS","VAViewerSettingsProvider.alert.system.txt":()=>"Predefinito dell’amministratore","VAViewerSettingsProvider.generalSettings.txt":()=>"Temi","VAViewerSettingsProvider.enableHighContrast.txt":()=>"Ignora tema del report e utilizza tema del report SAS High Contrast","ViewerBusyDialog.openReport.txt":()=>"Apertura del report...","ViewerBusyDialog.prepareExport.txt":()=>"Preparazione dell’esportazione...","ViewerBusyDialog.preparePrint.txt":()=>"Preparazione della stampa...","PDFGeneration.printingReport.txt":()=>"Generazione del PDF del report. Quando pronto verrà effettuato il download.","PDFGeneration.fileName.fmt":({fileName:t,date:e})=>`${t} in data ${e}`,"VisualElementActionUtil.actionMenuLabel.txt":()=>"Seleziona un’azione","VisualElementActionUtil.hierarchyExhausted.txt":()=>"È stato raggiunto il livello più basso della gerarchia.","VisualElementActionUtil.hierarchiesExhausted.txt":()=>"È stato raggiunto il livello più basso di tutte le gerarchie.","VisualElementActionUtil.drillLabel.fmt":({value:t})=>"Naviga in "+t,"SaveImageUtil.snapshot.fmt":({a0:t,a1:e,a2:o})=>`Snapshot di ${t} ${e} in ${o}`,"ObjectToolbarIcon.SaveImageTooltip.txt":()=>"Salva immagine","ObjectToolbarIcon.PrintObject.txt":()=>"Stampa oggetto...","ObjectToolbarIcon.ShareObject.txt":()=>"Condividi oggetto...","ObjectToolbarIcon.OverflowButton.default.txt":()=>"Altro","ObjectToolbarIcon.OverflowButton.labeled.fmt":({label:t})=>"Menu Oggetto per "+t,"ObjectToolbarIcon.Accelerator.txt":()=>"Visualizza con SAS® Graphics Accelerator","ZoomControl.button.tip.txt":()=>"Zoom","ZoomControl.button.zoomin.txt":()=>"Zoom avanti","ZoomControl.button.zoomout.txt":()=>"Zoom indietro","ZoomControl.button.display.txt":()=>"Controlli dello zoom","ZoomControl.button.reset.txt":()=>"Reimposta zoom","ExpandControl.button.expand.txt":()=>"Ingrandisci visualizzazione","ExpandControl.button.restore.txt":()=>"Ripristina visualizzazione","ExpandControl.button.expand.tip.txt":()=>"Ingrandisci","ExpandControl.button.restore.tip.txt":()=>"Ripristina","ReportVisualContainer.sectionLink.notAllowed.maximize.txt":()=>"Impossibile eseguire i collegamenti alla pagina quando questo oggetto è ingrandito.","DragModeControl.button.pan.tip.txt":()=>"Scorrimento","DragModeControl.button.circular.tip.txt":()=>"Selezione circolare","DragModeControl.button.freeform.tip.txt":()=>"Selezione libera","DragModeControl.button.rectangular.tip.txt":()=>"Selezione rettangolare","DragModeControl.button.zoom.tip.txt":()=>"Zoom rettangolo","ReportXMLDialog.title.txt":()=>"XML del report","ReportXMLDialog.closeButton.txt":()=>"Chiudi","ReportXMLDialog.copyButton.txt":()=>"Copia negli Appunti","ReportXMLDialog.error.txt":()=>"Errore di caricamento dell’XML del report","ErrorDialog.error.txt":()=>"Rilevato un errore. Contatta l’amministratore del sistema.","Application.banner.txt":()=>"SAS® Report Viewer","Application.wip.banner.txt":()=>"SAS® Visual Analytics - Visualizzatore di report","Application.productName.txt":()=>"SAS® Visual Analytics","OpenReportDialog.title.txt":()=>"Apri report","OpenReportDialog.reports.txt":()=>"Report:","OpenReportDialog.cancel.txt":()=>"Annulla","OpenReportDialog.ok.txt":()=>"OK","AriaLive.numberOfObjectsUpdated.fmt":({count:t})=>t+" oggetti aggiornati","AriaLive.oneObjectUpdated.txt":()=>"1 oggetto aggiornato","AriaLive.reportOpened.txt":()=>"Report aperto","AriaLive.reportClosed.txt":()=>"Report chiuso","ExportData.generating.txt":()=>"Generazione dell’esportazione. Quando pronto verrà effettuato il download.","ExportData.warning.txt":()=>"Errore di generazione dei dati","ExportData.nodata.txt":()=>"Nessun dato da esportare","ExportData.exportData.txt":()=>"Esporta dati...","PlaybackAnimationDialog.saveButton.txt":()=>"Salva","PlaybackAnimationDialog.cancelButton.txt":()=>"Annulla","PlaybackAnimationDialog.playButton.txt":()=>"Riproduci report","PlaybackAnimationDialog.title.txt":()=>"Modifica della riproduzione","PlaybackAnimationDialog.transitionUnit.label.txt":()=>"Unità di transizione:","PlaybackAnimationDialog.transitionUnit.page.txt":()=>"Pagina","PlaybackAnimationDialog.transitionUnit.object.txt":()=>"Oggetto","PlaybackAnimationDialog.secondsPerUnit.label.txt":()=>"Secondi per unità:","PlaybackAnimationDialog.showMaximized.label.txt":()=>"Mostra oggetti ingranditi:","PlaybackAnimationDialog.showCanvasOnly.label.txt":()=>"Mostra solo canvas:","PlaybackAnimationDialog.showTimer.label.txt":()=>"Mostra timer:","PlaybackAnimationDialog.showNavigationControls.label.txt":()=>"Mostra controlli di navigazione al clic o al tocco:","PlaybackNavigationControls.previousPage.txt":()=>"Pagina precedente","PlaybackNavigationControls.nextPage.txt":()=>"Pagina successiva","PlaybackNavigationControls.previousObject.txt":()=>"Oggetto precedente","PlaybackNavigationControls.nextObject.txt":()=>"Oggetto successivo","TransportConnection.generateReportTimeout.txt":()=>"Il caricamento del report sta richiedendo parecchio tempo. Continuare?","TransportConnection.openReport.txt":()=>"Apri report","ViewerContainer.reportNotFound.fmt":({location:t})=>"Il report specificato nel seguente percorso non esiste: "+t,"Hierarchy.expand.fmt":({label:t})=>"Espandi "+t,"Hierarchy.collapse.fmt":({label:t})=>"Comprimi "+t,"GraphElementDecorator.overview.txt":()=>"Panoramica","CompositeGraphElementDecorator.hideOverview.txt":()=>"Nascondi panoramica","CompositeGraphElementDecorator.showOverview.txt":()=>"Mostra panoramica","token.closeIcon.tooltip.txt":()=>"Rimuovi","token.grouptoken.moreoption.label.txt":()=>"Altro...","token.grouptoken.moreoptionheader.label.fmt":({count:t})=>`Primi ${t} elementi:`,"token.grouptoken.ariaLabel.fmt":({name:t,count:e})=>`${t}, numero di elementi nel gruppo: ${e}`,"token.grouptoken.closeIcon.tooltip.txt":()=>"Rimuovi gruppo","token.grouptoken.countlabel.fmt":({count:t})=>`(${t})`,"token.prevButton.tooltip.txt":()=>"Passa all’elemento precedente","token.nextButton.tooltip.txt":()=>"Passa all’elemento successivo","token.menu.tooltip.txt":()=>"Elenco di elementi","token.menuItem.customtooltip.fmt":({value:t})=>"Rimuovi "+t,"token.menuItem.customAriaLabel.fmt":({value:t})=>t+", premi il tasto Canc per rimuovere l’elemento.","token.containeritems.label.txt":()=>"elementi","token.grouptoken.menu.desc.txt":()=>". Premi lo spazio per attivare il menu, quindi naviga con i tasti con le frecce","SectionSelectionBar.noSelections.txt":()=>"Nessuna selezione","SectionSelectionBar.title.txt":()=>"Filtri:","CheckboxList.selectAll.txt":()=>"Seleziona tutto","CheckboxList.clearSelection.txt":()=>"Cancella selezione","CheckboxList.clearSelection.fmt":({count:t})=>`Cancella selezione (${t})`,"ExplanationInfoDialog.title.fmt":({label:t})=>"Spiegazione di "+t,"ExplanationInfoDialog.loading.txt":()=>"Preparazione della spiegazione...","ExplanationInfoDialog.cancel.txt":()=>"Annulla","ExplanationInfoDialog.close.txt":()=>"Chiudi","PromptHeader.emptyReport.txt":()=>"Trascina qui un elemento di dati o un controllo per creare un prompt del report.","PromptHeader.emptyPage.txt":()=>"Trascina qui un elemento di dati o un controllo per creare un prompt della pagina.","ZeroState.editMode.txt":()=>"Trascina qui un template, elementi di dati o oggetti.","ZeroState.viewMode.txt":()=>"Nessun contenuto da visualizzare.","ObjectStatus.assignData.txt":()=>"Assegna dati","ObjectStatus.selectImage.txt":()=>"Seleziona immagine","ObjectStatus.selectJob.txt":()=>"Seleziona job","ObjectStatus.cancelLoading.txt":()=>"Annulla caricamento","ObjectStatus.loadingCanceled.txt":()=>"Caricamento annullato","ObjectStatus.resumeLoading.txt":()=>"Ripristina caricamento"}}}]);
//# sourceMappingURL=17.va-report-components.js.map